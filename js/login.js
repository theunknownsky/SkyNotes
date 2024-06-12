var theme = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the variable from sessionStorage
    const theme = sessionStorage.getItem('theme');
    // Display the variable
    console.log('Theme: ' + theme);
    setLoginTheme(theme)
    document.getElementById('email').placeholder = sessionStorage.getItem('email')
    document.getElementById('password').placeholder = sessionStorage.getItem('password')
});

// theme change for login.html
function changeLoginTheme(){
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
    siteAnimation();
    sessionStorage.setItem('theme', theme);
}

function setLoginTheme(currentTheme){
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

function loginAttempt(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (email == sessionStorage.getItem('email')){
        if (password == sessionStorage.getItem('password')){
            alert('You are now redirected to the demo of Sky Notes.');
            window.location.href = 'notes.html';
        } else {
            alert('Wrong password: You can use the current test saved password: ' + sessionStorage.getItem('password'));
        }
    } else {
        alert('Email does not exist: You can use the current test saved email: ' + sessionStorage.getItem('email'));
    }
}