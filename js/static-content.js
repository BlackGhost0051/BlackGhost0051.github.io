let staticContent = document.querySelector(".nav-bar");
let footer = document.querySelector(".footer");


let navbarHTML = "" +
    "        <ul>\n" +
    "            <li><a href='./index.html'>About Me</a></li>\n" +
    "            <li><a href='./projects.html'>Projects</a></li>\n" +
    "            <li><a href='./skills.html'>Skills</a></li>\n" +
    "            <li><a href='./experience.html'>Experience</a></li>\n" +
    "            <li><a href='./contact.html'>Contact</a></li>\n" +
    "        </ul>";

let footerHTML = "" +
    "       <div class='links'>" +
    "       </div>";


staticContent.innerHTML = navbarHTML;
footer.innerHTML = footerHTML;