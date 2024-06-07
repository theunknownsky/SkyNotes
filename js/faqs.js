var theme = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the variable from sessionStorage
    const theme = sessionStorage.getItem('theme');
    // Display the variable
    console.log('Theme: ' + theme);
    setFaqsTheme(theme)
});


function changegFaqsToLightMode(){
    document.querySelectorAll('.accordion').forEach(accordion => {
        accordion.style.backgroundColor = '#ebebeb';
        accordion.style.border = '1px solid #bdbdbd';
        accordion.style.color = '#242424';
    });
}
function changegFaqsToDarkMode(){
    document.querySelectorAll('.accordion').forEach(accordion => {
        accordion.style.backgroundColor = '#1f1f1f';
        accordion.style.border = '1px solid #353535';
        accordion.style.color = '#dadada';
    });
}

function accordionTransition(){
    document.querySelectorAll('.accordion').forEach(accordion => {
        accordion.style.transition = '0.5s';
    });
}

// theme change for login.html
function changeFaqsTheme(){
    if (theme == 0){
        changeBodyThemeToLightMode();
        changeFooterThemeToLightMode();
        changeHeaderToLightMode();
        changegFaqsToLightMode();
        theme = 1;
    } else if (theme == 1){
        changeBodyThemeToDarkMode();
        changeFooterThemeToDarkMode();
        changeHeaderToDarkMode();
        changegFaqsToDarkMode();
        theme = 0;
    }
    accordionTransition()
    siteAnimation();
    sessionStorage.setItem('theme', theme);
}

function setFaqsTheme(currentTheme){
    if (currentTheme == 0){
        changeBodyThemeToDarkMode();
        changeFooterThemeToDarkMode();
        changeHeaderToDarkMode();
        changegFaqsToDarkMode();
    } else if (currentTheme == 1){
        changeBodyThemeToLightMode();
        changeFooterThemeToLightMode();
        changeHeaderToLightMode();
        changegFaqsToLightMode(); 
    }   
    theme = currentTheme;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}