let main = document.getElementById("main");
let footer = document.getElementById("footer");
footer.classList.add("h-card");

function loadIndex()
{
    main.innerHTML=" ";
    let h1 = document.createElement("h1");


    main.append(h1);
    h1.setAttribute('id','sentence');
    h1.innerText = "Welcome to my portfolio website";
    
    loadFooter();
    // typeWriter();

}

function loadDevelopment()
{
   
}

function loadContactMe()
{
    let form = document.createElement("form");
    
    form.setAttribute("action", "https://formsubmit.co/ocmatipa@gmail.com");
    form.setAttribute("method","POST");

    let section = document.createElement("section");
    main.append(section);

    let h1 = document.createElement("h1");
    section.append(h1);

    section.append(form);


    section.classList.add("Container");

    for(i=0; i<4; i++)
    {
        let input = document.createElement("input");
        input.type = "hidden";

        let nameln;
        let valueln;

        switch(i)
        {
            case 0:
                nameln = "_subject";
                valueln = "A new user wants to stay in contact!";
                break;
            case 1:
                nameln = "_next";
                valueln = "https://matipam.github.io/2344503-WSOA3028A-Assignment-1/ContactThanks.html"; //update link
                break;
            case 2:
                nameln = "_autoresponse";
                valueln = "Thank you so much for reaching out! I will respond to your message as soon as possible :)";
                break;
            case 3:
                nameln = "_captcha";
                valueln = "false";
                break;
        }

        input.setAttribute("name", nameln);
        input.setAttribute("value", valueln);
        input.setAttribute("type", "hidden");

        section.append(input);
    }
    
    let icon = document.createElement("i");
    section.append(icon);

    for(a=0; a<=3; a++)
    {
        let className;

        switch(a)
        {
            case 0:
                className = "fa-solid";
                break;
            case 1:
                className = "fa-envelopes-bulk";
                break;
            case 2:
                className = "FormIcons";
                break;

        }
        icon.classList.add(className);
        let label = document.createElement("label");
        section.append(label);
        label.for = "email";
    }
   
}

function loadAboutMe()
{
    let div1 = document.createElement("div");
    main.append(div1);
    div1.classList.add("example");
    let h1 = document.createElement("h1");
    h1.innerText = "About Me";
    div1.append(h1);
    let div1a = document.createElement("div");
    div1.append(div1a);
    div1a.classList.add("ex-exp-tabs");


    let h2 = document.createElement("h2");
    main.append(h2);
    h2.innerText = "Education";
    let div2 = document.createElement("div");
    main.append(div2);
    div2.classList.add("ex-item-grid");

    let div3 = document.createElement("div");
    main.append(div3);
    let h2a = document.createElement("h2");
    div3.append(h2a);
    h2a.innerText = "Work Experience";
    let div3a = document.createElement("div");
    div3.append(div3a);
    div3a.classList.add("section-content");
    let div3b = document.createElement("div");
    div3.append(div3b);
    div3b.classList.add("ex-exp-stepper");

}

function loadFooter()
{
    footer.innerHTML = "";

    let p = document.createElement("p");
    footer.append(p);
    p.classList.add("p-contact");
    p.innerText = "Contact Email: ocmatipa@gmail.com";
}



