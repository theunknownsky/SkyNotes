var theme = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the variable from sessionStorage
    const theme = sessionStorage.getItem('theme');
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
    siteAnimation();
    sessionStorage.setItem('theme', theme);
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

function signupAttempt(){
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let nickname = document.getElementById('nickname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    console.log(firstname.length);
    console.log(lastname.length);
    console.log(nickname.length);
    console.log(email.length);
    console.log(password.length);
    console.log(confirmPassword.length);
    if (firstname.length > 0 && lastname.length > 0 && nickname.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0){
        if (password.length > 3){
            if (password == confirmPassword){
                sessionStorage.setItem('firstname', firstname);
                sessionStorage.setItem('lastname', lastname);
                sessionStorage.setItem('nickname', nickname);
                sessionStorage.setItem('email', email);
                sessionStorage.setItem('password', password);
                alert('You are now redirected to the demo of Sky Notes.');
                window.location.href = 'notes.html';
            } else {
                alert('Please type the right password in the Confirm Password field.');
            }
        } else {
            alert('Your password length must be 4 or more than 4 characters.')
        }
    } else {
        alert("Please fill out the neccessary details.");
    }
    
}