

// My skills | Code-language
const CodeLanguage = [
    { text: "Python", img: "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256" },
    { text: "C++", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" },
    { text: "C", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" },
    { text: "PHP", img: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png"},
    { text: "Javascript", img: "https://images.vexels.com/media/users/3/166403/isolated/preview/a5a33bf3004830a2bd581e9fa65de660-javascript-programming-language-icon.png?w=360"},
    { text: "Node.js", img: "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png"},
    { text: "Html", img: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png"},
    { text: "CSS", img: "https://img.icons8.com/fluent/512/css3.png"}
];

const code = document.getElementById("myskills-code-language");

CodeLanguage.forEach(CodeLanguage => {
const a = document.createElement("a");
a.className = "skill-item";
a.innerHTML = `
    <img src="${CodeLanguage.img}" alt="${CodeLanguage.text}" style="width: 20px;">
    <span>${CodeLanguage.text}</span><br>
`;
code.appendChild(a);
});

// My skills | Tool
const Tool = [
    {text: "Terminal, CMD, Powershell", img: "https://apull.asso.nc/content/images/2021/05/terminal-logo.png"},
    {text: "John the ripper", img: "https://gitlab.com/uploads/-/system/project/avatar/11903812/kali-john.png"},
    {text: "Hashcat", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJzkDKpUyJ0aNjvFw4yH0DZGxfTqymkNilA&s"},
    {text: "Burpsuite", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDsIMwEubnS43MuXjzPzgFVJ1rGtiDFJjwg&s"},
    {text: "Metasploit", img: "https://www.kali.org/tools/metasploit-framework/images/metasploit-framework-logo.svg"},
    {text: "Nmap", img: "https://dashboard.snapcraft.io/site_media/appmedia/2016/03/nmap.png"},
    {text: "SQLmap", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQfZm5R87uEb5qAnHTqReAZGozGtdZ8ZjaFA&s"},
    {text: "Hydra", img: "https://www.kali.org/tools/hydra/images/hydra-logo.svg"},
    {text: "Ncrack", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSfmsRPimLc_Ra2-TH-tsnwmehMgDScdetQ&s"},
    {text: "Aircrack-ng", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5XAXu-hWPig2Q60dL_JqHpyZkoUEckjFFw&s"},
    {text: "TCPdump", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCQD4aTroOAhcEaJghOwWIwK4eERvOmZxxg&s"},
    {text: "Wireshark", img: "https://www.kali.org/tools/wireshark/images/wireshark-logo.svg"},
    {text: "Netcat", img: "https://www.kali.org/tools/netcat/images/netcat-logo.svg"},
    {text: "Splunk", img: "https://miro.medium.com/v2/resize:fit:535/1*tMDXVl8HWw4JaHrWl6S6AQ.png"},
    {text: "x64dbg", img: "https://pbs.twimg.com/profile_images/923303365974593536/jP926AXC_400x400.jpg"},
    {text: "Cisco packet tracer", img: "https://hurbad.com/wp-content/uploads/2021/12/Cisco-Packet-Tracer.png"},
    {text: "CyberChef", img: "https://repocloud.io/static/apps/cyberchef/assets/logo.png"},
];

const tool = document.getElementById("myskills-tool");

Tool.forEach(Tool => {
const a = document.createElement("a");
a.className = "skill-item";
a.innerHTML = `
    <img src="${Tool.img}" alt="${Tool.text}" style="width: 20px;">
    <span>${Tool.text}</span><br>
`;
tool.appendChild(a);
});

// My skills | OS
const OS = [
    {text: "Kali-linux", img: "https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/kali-logo.png"},
    {text: "Ubuntu", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzERWAmwTP14tsP9FkR2-gvGALrceE4cdskw&s"},
    {text: "Window", img: "https://static.vecteezy.com/system/resources/previews/016/460/828/non_2x/windows-os-logo-top-operating-system-signs-free-png.png"},
    {text: "Parrot-security", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWb4XCIcMpF6J3-37LaMWassk71PPNVWU7Qw&s"}
];

const os = document.getElementById("myskills-os");

OS.forEach(OS => {
const a = document.createElement("a");
a.className = "skill-item";
a.innerHTML = `
    <img src="${OS.img}" alt="${OS.text}" style="width: 20px;">
    <span>${OS.text}</span><br>
`;
os.appendChild(a);
});

// My skills | Knowledge
const KnowledgeAI = [
    {text: "TensorFlow-keras (python)", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png"},
    {text: "Scikit-learn (python)", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png"},
    {text: "Pytorch (python)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyOAyEZ7rQuXiP6Kxx0B9y_aJ59fRniUVRw&s"},
];

const kl = document.getElementById("myskills-knowledge-ai");

KnowledgeAI.forEach(KnowledgeAI => {
const a = document.createElement("li");
a.className = "skill-item-list";
a.innerHTML = `
    <img src="${KnowledgeAI.img}" alt="${KnowledgeAI.text}" style="width: 20px;">
    <span>${KnowledgeAI.text}</span><br>
`;
kl.appendChild(a);
});