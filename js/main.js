var theme = 0;

// body changes
function changeBodyThemeToLightMode(){
    document.body.style.backgroundColor = "#dadada";
    document.body.style.color = "#242424";
}
function changeBodyThemeToDarkMode(){
    document.body.style.backgroundColor = "#242424";
    document.body.style.color = "#dadada";
}

// footer changes
function changeFooterThemeToLightMode(){
    document.getElementById("footer").style.color = "#dadada";
    document.getElementById("footer").style.backgroundColor = "#242424";
    const links = document.querySelectorAll('.a-child'); 
    const numLinksToChange = 5;
    links.forEach((link, index) => {
        if (index < numLinksToChange) {
            link.style.color = '#dadada'; 
        }
    });    
}
function changeFooterThemeToDarkMode(){
    document.getElementById("footer").style.color = "#242424"
    document.getElementById("footer").style.backgroundColor = "#dadada";
    const links = document.querySelectorAll('.a-child'); 
    const numLinksToChange = 5;
    links.forEach((link, index) => {
        if (index < numLinksToChange) {
            link.style.color = '#242424'; 
        }
    });
}

// 
function storeThemeDataToIndex(){
    localStorage.setItem('theme', theme);
    window.location.href = "../html/index.html";
}

function storeThemeDataToLogin(){
    localStorage.setItem('theme', theme);
    window.location.href = "../html/login.html";
}

function storeThemeDataToSignup(){
    localStorage.setItem('theme', theme);
    window.location.href = "../html/signup.html";
}