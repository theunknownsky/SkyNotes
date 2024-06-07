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

function siteAnimation(){
    document.body.style.transition = "0.5s";
}

// login/signup header changes
function changeHeaderToLightMode(){
    document.getElementById("theme").src = "../img/sun-black.svg";
    document.getElementById("logo").src = "../img/cloud-fog2-black.svg";
    document.getElementById("sitename").style.color = "#242424";
    document.getElementById("about-us").style.color = "#242424";
    document.getElementById("contact").style.color = "#242424";
    document.getElementById("features").style.color = "#242424";
    document.getElementById("faqs").style.color = "#242424";
    document.getElementById("login").style.color = "#242424";
    
}
function changeHeaderToDarkMode(){
    document.getElementById("theme").src = "../img/moon-white.svg";
    document.getElementById("logo").src = "../img/cloud-fog2-white.svg";
    document.getElementById("sitename").style.color = "#dadada";
    document.getElementById("about-us").style.color = "#dadada";
    document.getElementById("contact").style.color = "#dadada";
    document.getElementById("features").style.color = "#dadada";
    document.getElementById("faqs").style.color = "#dadada";
    document.getElementById("login").style.color = "#dadada";
}

// login/signup form changes
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