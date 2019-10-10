console.log("test");

let parentElement = document.querySelector("body").parentNode;
let bodyElement = document.querySelector("body")
//hide body
bodyElement.style.visibility = "hidden";

// add temporary section
let tempSection = document.createElement("section");
tempSection.setAttribute("id","tempSection");
let tempDiv = document.createElement("div");
tempDiv.setAttribute("id","tempDiv");
let tempContent = document.createElement("h1");
tempContent.innerText = "Is this really worth your time?";
tempDiv.appendChild(tempContent);

tempSection.appendChild(tempDiv);
parentElement.insertBefore(tempSection,bodyElement);


setTimeout(function(){
    let tempIDSection = document.getElementById("tempSection");
    tempIDSection.remove();
    bodyElement.style.visibility = 'visible';
},20000);