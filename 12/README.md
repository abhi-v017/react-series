# react mega project
1 - .env file have all the essential information of appwrite like project id collection id, appwriteurl bucket id , database id etc
- conf.js file use all these IDs and export them as variables and also convert them to string.

2 - auth.js file have all the methods that are used for authentication, it has a class authservice which has a client, account and constructor and also the authentication methods.
- construcotr has endpoinnt which has appwriteurl and project id and lso create account using new Account with parameter client.
- then it has createAccount, login, getCurrentUser, logout this are try catch block with method .create, .createEmailPasswordSession, .get, .deleteSessions

3 - 
