let content = document.querySelector(".content");
let main = document.querySelector(".main");
let staticContent = document.querySelector(".nav-bar");
let footer = document.querySelector(".footer");

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
                        <li>C</li>
                        <li>C++</li>
                        <li>C#</li>
                        <li>Java</li>
                        <li>Kotlin</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>GDScript</li>
                    </ul>
                </div>
                
                <div>
                    <h1>Frameworks:</h1>
                    <ul>
                        <li>Flask</li>
                        <li>Spring</li>
                        <li>wxWidgets</li>
                    </ul>
                </div>
                
                <div>
                    <h1>Databases:</h1>
                    <ul>
                        <li>SQLite</li>
                        <li>PostgreSQL</li>
                        <li>MangoDB</li>
                    </ul>
                </div>
                
                <div>
                    <h1>Tools:</h1>
                    <ul>
                        <li>Docker</li>    
                        <li>WordPress</li>    
                    </ul>
                </div>
                
                <div>
                    <h1>Security Tools:</h1>
                    <ul>
                        <li>Wireshark</li>
                        <li>Burpsuite</li>
                        <li>Nmap</li>
                        <li>Metasploit</li>
                        <li>Maltego</li>
                        <li>Ghidra</li>
                        <li>Recon-ng</li>
                    </ul>
                </div>
                
                <div>
                    <h1>Operating systems:</h1>
                    <ul>
                        <li>Kali Linux</li>
                        <li>Debian</li>
                        <li>Windows</li>
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