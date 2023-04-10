let main = document.getElementById("main");

let section = document.createElement("section");
section.classList.add("developmentGrid");



let h1 = document.createElement("h1");
main.append(h1);
h1.innerText = "My Projects";

const devMenu = ["Firtech", "WomansFlow", "DebugLogger"];
main.append(section);

for(i =0 ;i<devMenu.length; i++)
{

    let heading;
    let category;
    let loadFunction;
    let img = document.createElement("img");
    let src;
    let loc;

    switch(i)
    {
        case 0:
            heading = "Firtech"
            category = "App";
            // loadFunction = loadFirtech();
            src = "/Images/FirtechLogo.png";
            loc = devMenu[0]+".html";  
            break;
        case 1:
            heading = "WomansFlow"
            category = "App";
            // loadFunction = WomansFlow();
            src="/Images/WomansFlowHomePage.png";
            loc = devMenu[1]+".html"; 
            break;
        case 2:
            heading = "Debug.Logger"
            category = "Game";
            //loadFunction = ExamGame();
            src = "/Images/DebugLogger.png";
            loc = devMenu[2]+".html"; 
            break;
        // case 3:
        //     heading = "Data Visualisation"
        //     category = "Website";
        //     //loadFunction = DataVisWebsite();
        //     src = "../Images/WebsiteScreenshot.png";
        //     loc = devMenu[3]+".html"; 
        //     break;
    }

    let a = document.createElement("a");
    a.classList.add("u-url");

    img.src=src;

    let h3 = document.createElement("h3");
    h3.innerText = heading;

    let h4 = document.createElement("h4");
    h4.innerText = category;

    section.append(a);
    a.append(h3);
    a.append(img);
    a.append(h4);

    a.onclick = function()
    {
        location.href = loc;        
        //  location.href = "../"+devMenu[i]+".html";
        // console.log(loc); 
        // console.log("../"+devMenu[i]+".html");        
    }

}



