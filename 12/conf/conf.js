const conf = {
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    collectionId:String(import.meta.env.VITE_COLLECTION_ID),
    projectId:String(import.meta.env.VITE_PROJECT_ID),
    databaseId:String(import.meta.env.VITE_DATABASE_ID),
    bucketId:String(import.meta.env.VITE_BUCKET_ID)
}

export default conf