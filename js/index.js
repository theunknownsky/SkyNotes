var theme = 0; // theme default: dark mode
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
function changeTheme(){
    if (theme === 0){
        alert("You changed into Light Mode");
        changeIndexHTMLImgToLightMode();
        document.body.style.backgroundColor = "#dadada";
        document.body.style.color = "#242424";
        document.getElementById("footer").style.color = "#dadada";
        document.getElementById("footer").style.backgroundColor = "#242424";
        const links = document.querySelectorAll('.a-child'); // Select all a tags with class a-child
        const numLinksToChange = 5;
        links.forEach((link, index) => {
            if (index < numLinksToChange) {
                link.style.color = '#dadada'; // Change color to #dadada
            }
        });
        theme = 1;
    } else if (theme === 1){
        alert("You changed into Dark Mode");
        changeIndexHTMLImgToDarkMode();
        document.body.style.backgroundColor = "#242424";
        document.body.style.color = "#dadada";
        document.getElementById("footer").style.color = "#242424"
        document.getElementById("footer").style.backgroundColor = "#dadada";
        
        const links = document.querySelectorAll('.a-child'); // Select all a tags with class a-child
        const numLinksToChange = 5;
        links.forEach((link, index) => {
            if (index < numLinksToChange) {
                link.style.color = '#242424'; // Change color to #dadada
            }
        });
        theme = 0;
    }
}