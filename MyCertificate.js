// My Cert
const CodeLanguage = [
    { text: "NCSA MOOC", img: "Certificate/NCSA MOOC 1.jpg" },
    { text: "Ethical Hacking Essentials", img: "Certificate/Ethical Hacking Essentials.png" },
    { text: "Network defense Essentials", img: "Certificate/Network defense Essentials.png" },
    { text: "Cyberbootcamp 2025", img: "Certificate/Cyberbootcamp.png" },
    { text: "Cyberbootcamp 2025", img: "Certificate/Cyberbootcamp2.jpg" },
    { text: "DropCTF BEGINNER RED TEAM", img: "Certificate/DropCTF BEGINNER RED TEAM.png" },
    { text: "futureskill cybersecurity", img: "Certificate/futureskill cybersecurity 1.png" },
    { text: "1st Web Programming Competition 2023 (สพม.)", img: "Certificate/Webapplication 2023 1st.png" },
    { text: "1st Web Programming Competition 2025 (สพม.)", img: "Certificate/Webapplication 2025 1st.png" },
    { text: "2nd Webapplication 2023(สพม.)", img: "Certificate/Webapplication 2023 2nd.png" },
    { text: "4th Web Programming Competition 2024 (สพม.)", img: "Certificate/Webappilication 2024 4th.png" },
    { text: "Web Programming Competition 2024 (KKU)", img: "Certificate/KKU Webapplication 2024.jpg" },
    { text: "Web Programming Competition 2023 (KKU)", img: "Certificate/KKU Webapplication 2023.jpg" },
    { text: "การพัฒนาทางโปรแกรมคอมพิวเตอร์สำหรับนักเรียน", img: "Certificate/Witcom 2025.jpg" },
    { text: "การพัฒนาทักษะกระบวนการคิดโดยการใช้นวัตกรรมหุ่นยนต์", img: "Certificate/Witcom 2023.jpg" },
    { text: "KKU Education 2024 Laboratory and Academic Camp", img: "Certificate/KKU Education 2024 ENG.jpg" },
    { text: "เขียนโปรแกรมควบคุมหุ่นยนต์อัตโนมัติ", img: "Certificate/Engineer 2020.jpg" },
    { text: "Code combat", img: "Certificate/Code combat.jpg" }
];

const code = document.getElementById("MyCert");

CodeLanguage.forEach(CodeLanguage => {
const div = document.createElement("div");
div.className = "grid-container-myproject";
div.innerHTML = `
    <img src="${CodeLanguage.img}" alt="${CodeLanguage.text}">
    <div><h1>${CodeLanguage.text}</h1></div><br>
`;
code.appendChild(div);
});