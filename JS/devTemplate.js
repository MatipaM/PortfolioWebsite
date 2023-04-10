let main = document.getElementById("main");

let h1 = document.createElement("h1");


let section = document.createElement("section");
section.classList.add("WomansFlowGrid");


let WomansFlowImgSrc = ["WomansFlowHomePage.png","Donate.png", "FAQ.png", "FAQ2.png", "Report.png"]
let WFParagraph = ["WomansFlow was created as a response to a 24 hour hackathon which posed developers with the task of creating an app or website that solved some sort of problem within the healthcare sector.",
 "WomansFlow is a mobile application built using react native. The app aims to connect people who are willing to donate sanitary wear to those who need it. Users can report an emergency request or an empty dispensary. A notification is then sent to local users encouragaging them to donate sanitary wear to the reported bin. The app leverages the use of existing infrastructure i.e. sanitary bins located around universities.",
 `Developers: Raramainashe Wadaya - developed 'home' and 'report' sections. 
 Furaha - developed 'FAQ' and 'home' sections 
 Matipa Marufu (Me) - created wireframes, developed 'donate' and 'report' sections. `
];

let FirtechImgSrc = ["LandingScreen.png", "Login.png", "MainMenu.png", "notificationsPage.png", "personalInfo.png", "Profile.png", "registrationPage.png", "Settings.png", "shareDoc.png", "Something Else.png", "SPD1.png", "SPD2.png", "SPD3.png", "SPD4.png", "SPD5.png", "SPD6.png", "SPD7.png", "SPD8.png", "StoreDoc.png", "transactionHistory.png", "ViewDoc.png"];
let FParagraph = ["Last year, I interned at Firtech, a software development/automation company in South Africa. I am currently working as the only front end developer, building the front pages for an unreleased document storage application. The app's purpose is to assist in the safe storage of a user's documents both online and physically. If the user chooses to upgrade their subscription they have the additional option of having documents certified, and/or destroyed for them at the press of a button.",
"The web application, DocuVault was built in Blazor. Initially I had struggled a lot working with Blazor as I had limited experience as both an app developer and a web developer. Most of my development experience had come from my game design courses. However, I found that through multitudes of on-going iterations my skills have improved quite drastically over the past two to three months I have been working on this project. I also realised that it was much easier to fine tune smaller issues when I had built the entire page and was just going back and refining the details."];

let DebugImgSrc = ["Puzzle1.png", "Puzzle2.png", "Puzzle3.png", "Puzzle4.png", "Puzzle5.png", "Puzzle6.png", "Puzzle7.png", "Puzzle8.png", "Puzzle9.png", "Puzzle10.png"];
let DebugParagraph = ["Debug.Logger is a single device, two-player Sokoban block pusher with asymmetric co-operation.",
"Players must work together to help the games’ developers log an ensemble of glitchy bugs. Player 1 pushes bugs, while player 2 pulls them. Each bug-type has a unique quirk in its behaviour. Can you conquer these bothersome bugs, or maybe even use their game-breaking glitches to your advantage? ",
"Debug.Logger is intended to investigate and facilitate collaborative puzzle solving as a means of enraging player engagement with a puzzle game. "];


let selectedImgArray;
let selectedTxtArray;
let selectedLink;
let heading;


if(document.URL.includes("Firtech.html"))
{
    heading = "Firtech";
    selectedImgArray = FirtechImgSrc;
    selectedTxtArray = FParagraph;

} else if(document.URL.includes("WomansFlow.html"))
{
    heading = "Womansflow";
    selectedImgArray = WomansFlowImgSrc;
    selectedTxtArray = WFParagraph;
    selectedLink = "https://github.com/MatipaM/Hackathon_Generation_GenerationEquality";
} else if(document.URL.includes("DebugLogger.html"))
{
    heading = "Debug.Logger";
    selectedLink = "";
    selectedImgArray = DebugImgSrc;
    selectedTxtArray = DebugParagraph;
}

h1.innerText = heading;
main.append(h1);

for(i=0; i<selectedTxtArray.length; i++)
{
    let pText = document.createElement("p");
    pText.innerText = selectedTxtArray[i];
    main.append(pText);
}

main.append(section);

for(i = 0; i<selectedImgArray.length; i++)
{
    let img = document.createElement("img");
    img.src = "Images/"+selectedImgArray[i];
    section.append(img);
}



let a = document.createElement("a");
section.append(a);
a.href = selectedLink;
a.innerText = "Github Link";
