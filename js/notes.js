var theme = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the variable from sessionStorage
    const theme = sessionStorage.getItem('theme');
    // Display the variable
    console.log('Theme: ' + theme);
    setNotesTheme(theme)
});

// theme change for login.html
function changeNotesTheme(){
    if (theme == 0){
        changeBodyThemeToLightMode();
        changeNotesHeaderToLightMode();
        changeNotesNavbarToLightMode();
        theme = 1;
    } else if (theme == 1){
        changeBodyThemeToDarkMode();
        changeNotesHeaderToDarkMode();
        changeNotesNavbarToDarkMode();
        
        theme = 0;
    }
    siteAnimation();
    sessionStorage.setItem('theme', theme);
}

function setNotesTheme(currentTheme){
    if (currentTheme == 0){
        changeBodyThemeToDarkMode();
        changeNotesHeaderToDarkMode();
        changeNotesNavbarToDarkMode();
        
    } else if (currentTheme == 1){
        changeBodyThemeToLightMode();
        changeNotesHeaderToLightMode();
        changeNotesNavbarToLightMode();
    }   
    theme = currentTheme;
}
