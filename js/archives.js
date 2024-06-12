var theme = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the variable from sessionStorage
    const theme = sessionStorage.getItem('theme');
    // Display the variable
    console.log('Theme: ' + theme);
    setArchivesTheme(theme)
    if (sessionStorage.getItem('firstname') == null){
        sessionStorage.setItem('firstname', "Vonn Harold");
    }
    if (sessionStorage.getItem('lastname') == null){
        sessionStorage.setItem('lastname', "Mamaril");
    }
    if (sessionStorage.getItem('nickname') == null){
        sessionStorage.setItem('nickname', "Inconnus");
    }
    document.getElementById('current-user').innerHTML = "Hello, " + sessionStorage.getItem('nickname') + "!";

});

// theme change for login.html
function changeArchivesTheme(){
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

function setArchivesTheme(currentTheme){
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