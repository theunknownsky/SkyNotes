var theme = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the variable from sessionStorage
    const theme = sessionStorage.getItem('theme');
    // Display the variable
    console.log('Theme: ' + theme);
    setProfileTheme(theme)

    if (sessionStorage.getItem('firstname') == null){
        sessionStorage.setItem('firstname', "Vonn Harold");
        document.getElementById('firstname').value = sessionStorage.getItem('firstname');
    }
    if (sessionStorage.getItem('lastname') == null){
        sessionStorage.setItem('lastname', "Mamaril");
        document.getElementById('lastname').value = sessionStorage.getItem('lastname');
    }
    if (sessionStorage.getItem('nickname') == null){
        sessionStorage.setItem('nickname', "Inconnus");
        document.getElementById('nickname').value = sessionStorage.getItem('nickname');
    }
    document.getElementById('firstname').value = sessionStorage.getItem('firstname');
    document.getElementById('lastname').value = sessionStorage.getItem('lastname');
    document.getElementById('nickname').value = sessionStorage.getItem('nickname');
    document.getElementById('user').innerHTML = "Hello, " + sessionStorage.getItem('nickname') + "!";
    document.getElementById('current-user').innerHTML = "Current User: " + sessionStorage.getItem('nickname');
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

document.getElementById('email').readOnly = true;

function resetProfileDetails(){
    document.getElementById('firstname').value = sessionStorage.getItem('firstname');
    document.getElementById('lastname').value = sessionStorage.getItem('lastname');
    document.getElementById('nickname').value = sessionStorage.getItem('nickname');
}
function saveProfileDetails(){
    alert("Sky Notes Demo: Your details is now temporarily saved.")
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let nickname = document.getElementById('nickname').value;
    sessionStorage.setItem('firstname', firstname);
    sessionStorage.setItem('lastname', lastname);
    sessionStorage.setItem('nickname', nickname);
    document.getElementById('current-user').innerHTML = "Current User: " + sessionStorage.getItem('nickname');
    document.getElementById('user').innerHTML = "Hello, " + sessionStorage.getItem('nickname') + "!";
}

function resetPasswordDetails(){
    document.getElementById('password').value = "";
    document.getElementById('confirmPassword').value = "";
}
function savePasswordDetails(){
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password == confirmPassword){
        if (password != sessionStorage.getItem('password')){
            alert("Sky Notes Demo: Your password is now saved.");
            sessionStorage.setItem('password', password);
            resetPasswordDetails();
        } else {
            alert("Sky Notes Demo: This is your current password.")
            resetPasswordDetails();
        }
    } else {
        alert("Sky Notes Demo: Please type the right password in the Confirm Password field.")
    }
}