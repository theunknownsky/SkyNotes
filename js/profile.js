var theme = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the variable from sessionStorage
    const theme = sessionStorage.getItem('theme');
    // Display the variable
    console.log('Theme: ' + theme);
    setProfileTheme(theme)
});

function changeProfileFormThemeToLightMode(){
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.style.backgroundColor = '#dadada';
        input.style.borderColor = '#bdbdbd';
        input.style.color = '#242424';
    });
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = '#dadada';
        button.style.borderColor = '#242424';
        button.style.color = '#242424';
    })
}
function changeProfileFormThemeToDarkMode(){
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.style.backgroundColor = '#242424';
        input.style.borderColor = '#353535';
        input.style.color = '#dadada';
    });
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = '#242424';
        button.style.borderColor = '#dadada';
        button.style.color = '#dadada';
    })
}

// theme change for login.html
function changeProfileTheme(){
    if (theme == 0){
        changeBodyThemeToLightMode();
        changeNotesHeaderToLightMode();
        changeNotesNavbarToLightMode();
        changeProfileFormThemeToLightMode();
        theme = 1;
    } else if (theme == 1){
        changeBodyThemeToDarkMode();
        changeNotesHeaderToDarkMode();
        changeNotesNavbarToDarkMode();
        changeProfileFormThemeToDarkMode();
        theme = 0;
    }
    siteAnimation();
    sessionStorage.setItem('theme', theme);
}

function setProfileTheme(currentTheme){
    if (currentTheme == 0){
        changeBodyThemeToDarkMode();
        changeNotesHeaderToDarkMode();
        changeNotesNavbarToDarkMode();
        changeProfileFormThemeToDarkMode();
    } else if (currentTheme == 1){
        changeBodyThemeToLightMode();
        changeNotesHeaderToLightMode();
        changeNotesNavbarToLightMode();
        changeProfileFormThemeToLightMode();
    }   
    theme = currentTheme;
}