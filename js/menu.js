let content = document.querySelector(".content");
let main = document.querySelector(".main");
let staticContent = document.querySelector(".nav-bar");
let footer = document.querySelector(".footer");

let indexMain =
    "      <div>index</div>\n" +
    "      <div></div>\n" +
    "      <div></div>";

let projectsMain =
    "      <div>projects</div>\n" +
    "      <div></div>\n" +
    "      <div></div>";

let skillsMain =
    "      <div>skills</div>\n" +
    "      <div></div>\n" +
    "      <div></div>";

let experienceMain =
    "      <div>experience</div>\n" +
    "      <div></div>\n" +
    "      <div></div>";

let contactMain =
    "      <div>contact</div>\n" +
    "      <div></div>\n" +
    "      <div></div>";


let indexContent =
    "<h1>Black Ghost</h1>\n" +
    "<p>Also known as the Lord of Debugger Rooms. Master of Code Land. Elite orator and analyst.</p>";

let projectsContent =
    "<h1>Projects</h1>\n" +
    "<p>A showcase of innovative and impactful work.</p>";

let skillsContent =
    "<h1>Skills</h1>\n" +
    "<p>Proficient in modern web technologies, problem-solving, and code optimization.</p>";

let experienceContent =
    "<h1>Experience</h1>\n" +
    "<p>Years of hands-on coding and real-world application development.</p>";

let contactContent =
    "<h1>Contact</h1>\n" +
    "<p>Let's connect. Open to collaborations and challenges.</p>";


function setNavbar(){
    let navbarHTML = "" +
        "        <ul>\n" +
        "            <li><a class='about_me'>About Me</a></li>\n" +
        "            <li><a class='projects'>Projects</a></li>\n" +
        "            <li><a class='skills'>Skills</a></li>\n" +
        "            <li><a class='experience'>Experience</a></li>\n" +
        "            <li><a class='contact'>Contact</a></li>\n" +
        "        </ul>";

    let footerHTML = "" +
        "       <div class='links'>" +
        "       </div>";

    staticContent.innerHTML = navbarHTML;
    footer.innerHTML = footerHTML;
}


setNavbar();


let about_me = document.querySelector(".about_me");
let projects = document.querySelector(".projects");
let skills = document.querySelector(".skills");
let experience = document.querySelector(".experience");
let contact = document.querySelector(".contact");


function setIndex(){
    content.innerHTML = indexContent;
    main.innerHTML = indexMain;
}

function setProjects(){
    content.innerHTML = projectsContent;
    main.innerHTML = projectsMain;
}

function setSkills(){
    content.innerHTML = skillsContent;
    main.innerHTML = skillsMain;
}

function setExperience(){
    content.innerHTML = experienceContent;
    main.innerHTML = experienceMain;
}

function setContact(){
    content.innerHTML = contactContent;
    main.innerHTML = contactMain;
}


setIndex();

about_me.addEventListener('click', () => {
    setIndex();
});
projects.addEventListener('click', () => {
    setProjects();
});
skills.addEventListener('click', () => {
    setSkills();
});
experience.addEventListener('click', () => {
    setExperience();
});
contact.addEventListener('click', () => {
    setContact();
});