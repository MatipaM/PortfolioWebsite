// loadIndex();

//NAV BAR
const navMenu = ["index", "Development", "AboutMe", "contactMe"];
// let navArea = document.getElementById('nav');
let header = document.getElementById("header");
header.classList.add("h-card");

let  nav = document.createElement("nav");
header.append(nav);
nav.classList.add("h-entry");
nav.classList.add("#nav");

let ul = document.createElement("ul");
nav.append(ul);

// let navButtons = header.getElementsByTagName('a');
// let icons = navArea.getElementsByTagName('i');

for(let i = 0; i < navMenu.length; i++)
{
    let li = document.createElement("li");
    let a = document.createElement("a");
    let iLink =  document.createElement("i");

    ul.append(li);
    li.append(a);
    a.append(iLink);

    a.classList.add("u-url");
    iLink.classList.add("fa-solid");

    let className;

    switch(i)
    {
        case 0:
            className = "fa-house-chimney";
            break;
        case 1:
            className = "fa-blog";
            break;
        case 2:
            className = "fa-blog";
            break;
        case 3:
            className = "fa-blog";
            break;
    }

    iLink.classList.add(className);
    iLink.innerHTML = navMenu[i];

    a.onclick = function()
    {
        //if current page == development clear main before changing page

         location.href = navMenu[i]+".html";        
    }
}

window.onresize = function(){ location.reload(); }


//xampp server - download
//mysql

// function loadPage(i)
// {
//     main.innerHTML="";
//     switch(i)
//     {
//         case 0:
//             console.log("home is called");
//             loadIndex();
//             break;
//         case 1:
//             loadDevelopment();
//             break;
//         case 2:
//             console.log("About me is called");
//             loadAboutMe();
//             break;
//         // case 3:
//         //     loadContactMe();
//         //     break;
//     }
// }

