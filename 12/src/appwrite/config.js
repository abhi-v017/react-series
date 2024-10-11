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
}