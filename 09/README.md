# Theme Switcher

- it is a project to understand context api.
- Theme.js is the context file which has 3 parameters thememode, darktheme, lighttheme in themecontext and also exported themeProvider.
- card.jsx is a basic card component
- themebtn.jsx it is a toggle btn which is used to switch theme onchangebth function checks the darkthemestatus.
- the content of app.jsx wrapped within ThemeProvider that takes 3 value thememode, lighttheme, darktheme
- lighttheme function settheme to light adn darktheme sets it to dark.
- useeffect while toggle remove the light, dark from classlist and add thememode value.