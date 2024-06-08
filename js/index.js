var theme = 0;

console.log(sessionStorage.getItem('theme'));

document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('theme') === null){
        sessionStorage.setItem('theme', 0); 
    }
    console.log(sessionStorage.getItem('theme'));
    // Retrieve the variable from sessionStorage
    const theme = sessionStorage.getItem('theme');
    // Display the variable
    console.log('Theme: ' + theme);
    setIndexTheme(theme)
});

// theme change for index.html
function changeIndexTheme(){
    if (theme == 0){
        changeBodyThemeToLightMode();
        changeFooterThemeToLightMode();
        theme = 1;
    } else if (theme == 1){
        changeBodyThemeToDarkMode();
        changeFooterThemeToDarkMode();
        theme = 0;
    }
    siteAnimation();
    sessionStorage.setItem('theme', theme);
}

function setIndexTheme(currentTheme){
    if (currentTheme == 0){
        changeBodyThemeToDarkMode();
        changeFooterThemeToDarkMode();
    } else if (currentTheme == 1){
        changeBodyThemeToLightMode();
        changeFooterThemeToLightMode();
    }
    theme = currentTheme;
}