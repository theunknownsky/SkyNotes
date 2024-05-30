var theme = 0;

if (localStorage.getItem('theme') == null){
    localStorage.setItem('theme') = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the variable from localStorage
    const theme = localStorage.getItem('theme');
    // Display the variable
    console.log('Theme: ' + theme);
    setIndexTheme(theme)
});

// img changes in index.html
function changeIndexHTMLImgToLightMode(){
    document.getElementById("theme").src = "../img/sun-black.svg";
    document.getElementById("secure").src = "../img/shield-check.svg";
    document.getElementById("eye").src = "../img/eye.svg";
}
function changeIndexHTMLImgToDarkMode(){
    document.getElementById("theme").src = "../img/moon-white.svg";
    document.getElementById("secure").src = "../img/shield-check-white.svg";
    document.getElementById("eye").src = "../img/eye-white.svg";
}

// theme change for index.html
function changeIndexTheme(){
    if (theme == 0){
        changeIndexHTMLImgToLightMode();
        changeBodyThemeToLightMode();
        changeFooterThemeToLightMode();
        theme = 1;
    } else if (theme == 1){
        changeIndexHTMLImgToDarkMode();
        changeBodyThemeToDarkMode();
        changeFooterThemeToDarkMode();
        theme = 0;
    }
    localStorage.setItem('theme', theme);
}

function setIndexTheme(currentTheme){
    if (currentTheme == 0){
        changeIndexHTMLImgToDarkMode();
        changeBodyThemeToDarkMode();
        changeFooterThemeToDarkMode();
    } else if (currentTheme == 1){
        changeIndexHTMLImgToLightMode();
        changeBodyThemeToLightMode();
        changeFooterThemeToLightMode();
    }
    theme = currentTheme;
}