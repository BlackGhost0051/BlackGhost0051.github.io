let content = document.querySelector(".content");
let main = document.querySelector(".main");
let staticContent = document.querySelector(".nav-bar");
let footer = document.querySelector(".footer");




const links = {
    "C": "https://www.pngkit.com/png/detail/101-1010012_c-programming-icon-c-programming-language-logo.png",
    "C++": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    "C#": "https://upload.wikimedia.org/wikipedia/commons/d/d2/C_Sharp_Logo_2023.svg",
    "Java": "https://e7.pngegg.com/pngimages/123/816/png-clipart-computer-icons-java-%E5%92%96%E5%95%A1%E6%B5%B7%E6%8A%A5%E5%9B%BE%E7%89%87%E7%B4%A0%E6%9D%90-miscellaneous-text-thumbnail.png",
    "Kotlin": "https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg",
    "Python": "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png",
    "JavaScript": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "TypeScript": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg",
    "GDScript": "https://godotengine.org/assets/favicon.svg",

    "Flask": "https://flask.palletsprojects.com/en/stable/_static/flask-vertical.png",
    "Spring": "https://spring.io/favicon.svg?v=96334d577af708644f6f0495dd1c7bc8",
    "wxWidgets": "https://wxwidgets.org/assets/ico/favicon.ico",

    "SQLite": "https://www.sqlite.org/images/sqlite370_banner.svg",
    "PostgreSQL": "https://www.postgresql.org/media/img/about/press/elephant.png",
    "MangoDB": "https://www.mongodb.com/assets/images/global/favicon.ico",

    "Docker": "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
    "WordPress": "https://static-00.iconduck.com/assets.00/wordpress-icon-512x512-pmjhtep2.png",

    "Wireshark": "https://www.kali.org/images/tool-logo-wireshark.svg",
    "Burpsuite": "https://www.kali.org/tools/burpsuite/images/burpsuite-logo.svg",
    "Nmap": "https://www.kali.org/images/tool-logo-nmap.svg",
    "Metasploit": "https://www.kali.org/images/tool-logo-metasploit.svg",
    "Maltego": "https://www.kali.org/images/tool-logo-maltego.svg",
    "Ghidra": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Ghidra_logo.svg",
    "Recon-ng": "https://www.kali.org/tools/recon-ng/images/recon-ng-logo.svg",

    "Kali Linux": "https://www.kali.org/images/kali-logo.svg",
    "Debian": "https://www.debian.org/Pics/openlogo-50.png",
    "Windows": "https://assets.ubuntu.com/v1/183c7231-windows_logo.svg",
};

function createSkillItem(name) {
    return `<li><img src="${links[name]}" width="50" height="50"/>${name}</li>`;
}





let indexMain = `
            <div>
                index
            </div>
            <div></div>
            <div></div>`;

let projectsMain = `
    <div class="projects-container">
        <h2>Projects</h2>

        <div class="category">
            <h3>PC</h3>
            <ul>
                <li>Malware</li>
                <li>Cryptography</li>
                <li>Steganography</li>
                <li>Brute-force</li>
                <li>Electronics</li>
                <li>OSINT</li>
                <li>Social-Engineering</li>
                <li>HackRF-One</li>
            </ul>
        </div>

        <div class="category">
            <h3>Web</h3>
            <ul>
                <li>FastCode</li>
                <li>QuickCV</li>
                <li>VCloud</li>
            </ul>
        </div>

        <div class="category">
            <h3>Android</h3>
            <ul>
                <li>FakeGPS</li>
                <li>Nephilos</li>
                <li>Phantom</li>
                <li>Cyclop</li>
            </ul>
        </div>
    </div>
`;

let skillsMain = `
            <div class="skills-container">
            
                <div>
                    <h1>Programming languages:</h1>
                    <ul>
                        ${createSkillItem("C")}
                        ${createSkillItem("C++")}
                        ${createSkillItem("C#")}
                        ${createSkillItem("Java")}
                        ${createSkillItem("Kotlin")}
                        ${createSkillItem("Python")}
                        ${createSkillItem("JavaScript")}
                        ${createSkillItem("TypeScript")}
                        ${createSkillItem("GDScript")}
                    </ul>
                </div>
                
                <div>
                    <h1>Frameworks:</h1>
                    <ul>
                        ${createSkillItem("Flask")}
                        ${createSkillItem("Spring")}
                        ${createSkillItem("wxWidgets")}
                    </ul>
                </div>
                
                <div>
                    <h1>Databases:</h1>
                    <ul>
                        ${createSkillItem("SQLite")}
                        ${createSkillItem("PostgreSQL")}
                        ${createSkillItem("MangoDB")}
                    </ul>
                </div>
                
                <div>
                    <h1>Tools:</h1>
                    <ul>
                        ${createSkillItem("Docker")}
                        ${createSkillItem("WordPress")}
                    </ul>
                </div>
                
                <div>
                    <h1>Security Tools:</h1>
                    <ul>
                        ${createSkillItem("Wireshark")}
                        ${createSkillItem("Burpsuite")}
                        ${createSkillItem("Nmap")}
                        ${createSkillItem("Metasploit")}
                        ${createSkillItem("Maltego")}
                        ${createSkillItem("Ghidra")}
                        ${createSkillItem("Recon-ng")}
                    </ul>
                </div>
                
                <div>
                    <h1>Operating systems:</h1>
                    <ul>
                        ${createSkillItem("Kali Linux")}
                        ${createSkillItem("Debian")}
                        ${createSkillItem("Windows")}
                    </ul>
                </div>
            </div>`;

let experienceMain =`
            <div>
                experience
            </div>
            <div></div>
            <div></div>`;

let contactMain = `
            <div>
                contact
            </div>
            <div></div>
            <div></div>`;


let indexContent = `
            <h1>Black Ghost</h1>
            <p>Also known as the Lord of Debugger Rooms. Master of Code Land. Elite orator and analyst.</p>`;

let projectsContent =`
            <h1>Projects</h1>
            <p>A showcase of innovative and impactful work.</p>`;

let skillsContent = `
            <h1>Skills</h1>
            <p>Proficient in modern web technologies, problem-solving, and code optimization.</p>`;

let experienceContent = `
            <h1>Experience</h1>
            <p>Years of hands-on coding and real-world application development.</p>`;

let contactContent = `
            <h1>Contact</h1>
            <p>Let's connect. Open to collaborations and challenges.</p>`;


function setNavbar(){
    let navbarHTML = `
            <ul>
                <li><a class='about_me'>About Me</a></li>
                <li><a class='projects'>Projects</a></li>
                <li><a class='skills'>Skills</a></li>
                <li><a class='experience'>Experience</a></li>
                <li><a class='contact'>Contact</a></li>
            </ul>`;

    let footerHTML = `
            <div>Black Ghost</div>
            <div class='links'>
                <div>
                    <a href="https://github.com/BlackGhost0051">GitHub</a>
                </div>
                <div>
                    
                </div>
            </div>`;

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