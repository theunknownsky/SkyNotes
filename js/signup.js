var theme = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the variable from localStorage
    const theme = localStorage.getItem('theme');
    // Display the variable
    console.log('Theme: ' + theme);
    setSignupTheme(theme)
});

// theme change for login.html
function changeSignupTheme(){
    if (theme == 0){
        changeBodyThemeToLightMode();
        changeFooterThemeToLightMode();
        changeHeaderToLightMode();
        changeFormToLightMode();
        theme = 1;
    } else if (theme == 1){
        changeBodyThemeToDarkMode();
        changeFooterThemeToDarkMode();
        changeHeaderToDarkMode();
        changeFormToDarkMode();
        theme = 0;
    }
    localStorage.setItem('theme', theme);
}

function setSignupTheme(currentTheme){
    if (currentTheme == 0){
        changeBodyThemeToDarkMode();
        changeFooterThemeToDarkMode();
        changeHeaderToDarkMode();
        changeFormToDarkMode();
    } else if (currentTheme == 1){
        changeBodyThemeToLightMode();
        changeFooterThemeToLightMode();
        changeHeaderToLightMode();
        changeFormToLightMode();  
    }   
    theme = currentTheme;
}
