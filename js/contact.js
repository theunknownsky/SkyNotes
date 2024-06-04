var theme = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the variable from sessionStorage
    const theme = sessionStorage.getItem('theme');
    // Display the variable
    console.log('Theme: ' + theme);
    setContactTheme(theme)
});


function changeTextareaToLightMode(){
    document.getElementById('message').style.backgroundColor = "#dadada";
    document.getElementById('message').style.color = "#242424";
    document.getElementById('message').style.border = "1px solid #bdbdbd";
    document.getElementById('send-message-button').style.backgroundColor = "#dadada";
    document.getElementById('send-message-button').style.color = "#242424";
    document.getElementById('send-message-button').style.border = "1px solid #242424";
}
function changeTextareaToDarkMode(){
    document.getElementById('message').style.backgroundColor = "#242424";
    document.getElementById('message').style.color = "#dadada";
    document.getElementById('message').style.border = "1px solid #353535";
    document.getElementById('send-message-button').style.backgroundColor = "#242424";
    document.getElementById('send-message-button').style.color = "#dadada";
    document.getElementById('send-message-button').style.border = "1px solid #dadada";
}

function changeLinkContainerToLightMode(){
    document.getElementById('link-container').style.backgroundColor = "#ebebeb";
    document.getElementById('link-container').style.border = "1px solid #bdbdbd";
    document.querySelectorAll('.thru-ways').forEach(section => {section.style.backgroundColor = "#dadada"});
    document.getElementById("github-pic").src = "../img/github-black.svg";
    document.getElementById("google-pic").src = "../img/google-black.svg";
    document.getElementById("fb-pic").src = "../img/fb-black.svg";
}
function changeLinkContainerToDarkMode(){
    document.getElementById('link-container').style.backgroundColor = "#1f1f1f";
    document.getElementById('link-container').style.border = "1px solid #353535";
    document.querySelectorAll('.thru-ways').forEach(section => {section.style.backgroundColor = "#242424"});
    document.getElementById("github-pic").src = "../img/github-white.svg";
    document.getElementById("google-pic").src = "../img/google-white.svg";
    document.getElementById("fb-pic").src = "../img/fb-white.svg";
}

function goToGithub(){
    window.open("https://github.com/theunknownsky/SkyNotes/issues");
}
function goToGmail(){
    window.open("https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhbnqrpKZTDSnbxsrpvTSvqnmmvwlNNhGDnSsMdntQrkLnMhnKKVXpzbJhgkqpJWGfqbzm");
}
function goToFacebook(){
    window.open("https://www.facebook.com/TheUnknownSkyyy/");
}

function sendMessage(){
    let mess = document.getElementById('message').value;
    if(mess.length > 0){
        alert("Your message has been sent!")
    } else {
        alert("Please enter a message before trying to send")
    }
}


// theme change for login.html
function changeContactTheme(){
    if (theme == 0){
        changeBodyThemeToLightMode();
        changeFooterThemeToLightMode();
        changeHeaderToLightMode();
        changeFormToLightMode();
        changeTextareaToLightMode();
        changeLinkContainerToLightMode()
        theme = 1;
    } else if (theme == 1){
        changeBodyThemeToDarkMode();
        changeFooterThemeToDarkMode();
        changeHeaderToDarkMode();
        changeFormToDarkMode();
        changeTextareaToDarkMode()
        changeLinkContainerToDarkMode()
        theme = 0;
    }
    sessionStorage.setItem('theme', theme);
}

function setContactTheme(currentTheme){
    if (currentTheme == 0){
        changeBodyThemeToDarkMode();
        changeFooterThemeToDarkMode();
        changeHeaderToDarkMode();
        changeFormToDarkMode();
        changeTextareaToDarkMode()
        changeLinkContainerToDarkMode()
    } else if (currentTheme == 1){
        changeBodyThemeToLightMode();
        changeFooterThemeToLightMode();
        changeHeaderToLightMode();
        changeFormToLightMode();  
        changeTextareaToLightMode();
        changeLinkContainerToLightMode()
    }   
    theme = currentTheme;
}
