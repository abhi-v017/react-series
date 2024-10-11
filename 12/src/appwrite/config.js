import conf from "../conf.js";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId)
            this.databases = new Databases(this.client)
            this.bucket = new Storage(this.client)
    }
    async createPost({title, slug, featuredImage, content, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log('Appwrite service :: createPost :: error', error)
        }
    }
    async updatePost(slug, {title, content, featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log('Appwrite service :: updatepost :: error', error)
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log('Appwrite service :: deletepost :: error', error)
            return false
        }
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
            )
        } catch (error) {
            console.log('Appwrite service :: getpost :: error', error)
            return false
        }
    }
    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(
                conf.databaseId,
                conf.collectionId,
                queries
            )
        } catch (error) {
            console.log('Appwrite service :: getposts :: error', error)
        }
    }
    // upload file

    async uploadFile(file){
        try {
            return await this.bucket.uploadFile(
                conf.bucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('Appwrite service :: uploadfile :: error', error)
            return false
        }
    }
    async deleteFile(fileId){
        try {
            conf.bucketId,
            fileId
            return true
        } catch (error) {
            console.log('Appwrite service :: deletefile :: error', error)
            return false
        }
    }
    getFilePreview(fileId){
        this.bucket.getFilePreview(
            conf.bucketId,
            fileId
        )
    }
}