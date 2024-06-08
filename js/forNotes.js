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

function changeNotesHeaderToLightMode(){
    document.getElementById('logo').src = "../img/cloud-fog2-black.svg";
    document.getElementById('sitename').style.color = "#242424";
    document.getElementById('theme').src = "../img/sun-black.svg";
}
function changeNotesHeaderToDarkMode(){
    document.getElementById('logo').src = "../img/cloud-fog2-white.svg";
    document.getElementById('sitename').style.color = "#dadada";
    document.getElementById('theme').src = "../img/moon-white.svg";
}

function changeNotesNavbarToLightMode(){
    document.getElementById('profile').src = "../img/person-circle-black.svg";
    document.getElementById('notes').src = "../img/card-text-black.svg";
    document.getElementById('archives').src = "../img/archive-black.svg";
    document.getElementById('trash').src = "../img/trash-black.svg";
}
function changeNotesNavbarToDarkMode(){
    document.getElementById('profile').src = "../img/person-circle-white.svg";
    document.getElementById('notes').src = "../img/card-text-white.svg";
    document.getElementById('archives').src = "../img/archive-white.svg";
    document.getElementById('trash').src = "../img/trash-white.svg";
}

function goToProfile(){
    window.location.href = "profile.html";
}
function goToNotes(){
    window.location.href = "notes.html";
}
function goToArchives(){
    window.location.href = "archives.html";
}
function goToTrash(){
    window.location.href = "trash.html";
}