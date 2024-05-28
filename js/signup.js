var theme = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the variable from localStorage
    const theme = localStorage.getItem('theme');
    // Display the variable
    console.log('Theme: ' + theme);
    setLoginTheme(theme)
});

// login.html header changes
function changeLoginHeaderToLightMode(){
    document.getElementById("theme").src = "../img/sun-black.svg";
    document.getElementById("logo").src = "../img/cloud-fog2-black.svg";
    document.getElementById("sitename").style.color = "#242424";
}
function changeLoginHeaderToDarkMode(){
    document.getElementById("theme").src = "../img/moon-white.svg";
    document.getElementById("logo").src = "../img/cloud-fog2-white.svg";
    document.getElementById("sitename").style.color = "#dadada";
}

// login.html form changes
function changeFormToLightMode(){
    document.querySelectorAll('.form-container').forEach(element => {element.style.backgroundColor = '#ebebeb'});
    document.querySelectorAll('.form-container').forEach(element => {element.style.border = '1px solid #bdbdbd'});
    document.querySelectorAll('input').forEach(inputs => {
        inputs.style.backgroundColor = '#dadada';
        inputs.style.border = '1px solid #bdbdbd';
        inputs.style.color = '#242424';
    });
}
function changeFormToDarkMode(){
    document.querySelectorAll('.form-container').forEach(element => {element.style.backgroundColor = '#1f1f1f'});
    document.querySelectorAll('.form-container').forEach(element => {element.style.border = '1px solid #353535'});
    document.querySelectorAll('input').forEach(inputs => {
        inputs.style.backgroundColor = '#242424';
        inputs.style.border = '1px solid #353535';
        inputs.style.color = '#dadada';
    });
}

// theme change for login.html
function changeLoginTheme(){
    if (theme == 0){
        changeBodyThemeToLightMode();
        changeFooterThemeToLightMode();
        changeLoginHeaderToLightMode();
        changeFormToLightMode();
        theme = 1;
    } else if (theme == 1){
        changeBodyThemeToDarkMode();
        changeFooterThemeToDarkMode();
        changeLoginHeaderToDarkMode();
        changeFormToDarkMode();
        theme = 0;
    }
    localStorage.setItem('theme', theme);
}

function setLoginTheme(currentTheme){
    if (currentTheme == 0){
        changeBodyThemeToDarkMode();
        changeFooterThemeToDarkMode();
        changeLoginHeaderToDarkMode();
        changeFormToDarkMode();
    } else if (currentTheme == 1){
        changeBodyThemeToLightMode();
        changeFooterThemeToLightMode();
        changeLoginHeaderToLightMode();
        changeFormToLightMode();  
    }   
    theme = currentTheme;
}
