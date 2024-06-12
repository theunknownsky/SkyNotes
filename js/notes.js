var theme = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the variable from sessionStorage
    const theme = sessionStorage.getItem('theme');
    // Display the variable
    console.log('Theme: ' + theme);
    setNotesTheme(theme)

    document.getElementById('current-user').innerHTML = "Hello, " + sessionStorage.getItem('nickname') + "!";

});

function changeNotesFormThemeToLightMode(){
    document.getElementById('note-title').style.backgroundColor = "#dadada";
    document.getElementById('note-title').style.color = "#242424";
    document.getElementById('note-content').style.backgroundColor = "#dadada";
    document.getElementById('note-content').style.color = "#242424";
    document.getElementById('reset-note').style.backgroundColor = "#dadada";
    document.getElementById('reset-note').style.color = "#242424";
    document.getElementById('reset-note').style.borderColor = "#242424";
    document.getElementById('save-note').style.backgroundColor = "#dadada";
    document.getElementById('save-note').style.color = "#242424";
    document.getElementById('save-note').style.borderColor = "#242424";
}
function changeNotesFormThemeToDarkMode(){
    document.getElementById('note-title').style.backgroundColor = "#242424";
    document.getElementById('note-title').style.color = "#dadada";
    document.getElementById('note-content').style.backgroundColor = "#242424";
    document.getElementById('note-content').style.color = "#dadada";
    document.getElementById('reset-note').style.backgroundColor = "#242424";
    document.getElementById('reset-note').style.color = "#dadada";
    document.getElementById('reset-note').style.borderColor = "#dadada";
    document.getElementById('save-note').style.backgroundColor = "#242424";
    document.getElementById('save-note').style.color = "#dadada";
    document.getElementById('save-note').style.borderColor = "#dadada";
}


// theme change for login.html
function changeNotesTheme(){
    if (theme == 0){
        changeBodyThemeToLightMode();
        changeNotesHeaderToLightMode();
        changeNotesNavbarToLightMode();
        changeNotesFormThemeToLightMode();
        theme = 1;
    } else if (theme == 1){
        changeBodyThemeToDarkMode();
        changeNotesHeaderToDarkMode();
        changeNotesNavbarToDarkMode();
        changeNotesFormThemeToDarkMode()
        theme = 0;
    }
    siteAnimation();
    sessionStorage.setItem('theme', theme);
}

function setNotesTheme(currentTheme){
    if (currentTheme == 0){
        changeBodyThemeToDarkMode();
        changeNotesHeaderToDarkMode();
        changeNotesNavbarToDarkMode();
        changeNotesFormThemeToDarkMode()
    } else if (currentTheme == 1){
        changeBodyThemeToLightMode();
        changeNotesHeaderToLightMode();
        changeNotesNavbarToLightMode();
        changeNotesFormThemeToLightMode();
    }   
    theme = currentTheme;
}

// textarea height adjustment
noteContent = document.querySelector(".note-content");
noteContent.addEventListener('input', autoResize, false);
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

function resetNoteForm(){
    document.getElementById('note-title').value = "";
    document.getElementById('note-content').value = "";
}
function saveNoteForm(){
    alert("Demo: Your note will not be saved. Be reminded that this is a demo and your data will be lost right away. Thank you for using this website.");
    resetNoteForm();
}