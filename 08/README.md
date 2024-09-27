# Context APi
- made an userContext.js file to create context using createcContext() hook.
- then crated an userContextProvider.tsx file in which we used usercontext.provider as a wrapper by which its children can access that.
- then created login page in which used useContext hook with UserContext to set value of user consist of username and password on submit.
- and also reflect username in profile.
- in app.jsx userContextProvider as a wrapper so that its children can use userContext data.
