// Import data from data.js
import {about,
        github,
        linkedin,
        resume,
        projects,
        skills,
        history,
        commands,
        contact,
} from "./data/data.js";

let show_list=document.querySelector(".show-list");
let box=document.querySelector(".box");
let inputfile=`<div class="input flex m-2 p-2">
            <h1>Hello </h1>
            <input class="submit ml-4 border-0 bg-transparent focus:outline-none" type="text">
        </div>`;    

        


let input=document.querySelector(".submit");


window.onload=()=>{
    input.focus();
    console.log(input.value);

}


document.querySelector("body").addEventListener("click", (e) => {
  input.focus();
});



window.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        
        show_list.insertAdjacentHTML("beforeend",`<h1 class="mr-3 text-green-400 break-words">[UK_krish@konsole]:~$ ${input.value}</h1>`);
        switch (input.value.toLowerCase()) {
            case "help":
                Help();
                break;

            case "about":
                    AboutMe();
                    break;
            case "exit":
                    close_tab();
                    break;
            case "history":
                    History();
                    break;
            case "clear":
                show_list.innerHTML="";
                    break;
            case "contact":
                EMail();
                break;
            case "email":
                EMail();
                break;
            case "github":
                GitHub();
                break;
            case "linkedin":
                LinkedIn();
                break;
            case "resume":
                Resume();
                break;
            case "projects":
                Projects();
                break;
            case "skills":
                Skills();
                break;
            default:
                show_list.insertAdjacentHTML("beforeend",`<div class="typed">Command not found. For a list of commands, type 'help'.</div>`);
                break;
        }

        history.push(input.value);
        show_all();
       
        

    }
})


function close_tab(){
    if(confirm("Want to close this tab?")){
        window.close();
    }
   
}

function show_all(){
    box.lastElementChild.scrollIntoView({block: "end"});
    input.value="";
}











// Function of all the commands

function History(){
    for(let i=0;i<history.length;i++){
        show_list.insertAdjacentHTML("beforeend",`<div class="typed">${history[i]}</div>`);
    }
    show_all();
    input.value="";
}


function AboutMe(){
    let aboutMe=about;
    console.log(aboutMe);
    for(let i=0;i<aboutMe.length;i++){
        show_list.insertAdjacentHTML("beforeend",`<div class="typed">${aboutMe[i]}</div>`);
    }
    show_all();
    input.value="";
}


function EMail(){
    show_list.insertAdjacentHTML("beforeend",`<div class="typed">${contact[0]}</div>`);
    setTimeout(() => {
        window.open(contact[1], `_blank`);
     
    }, 2000);
    show_all();
   
}
function GitHub(){
    show_list.insertAdjacentHTML("beforeend",`<div class="typed">${github[0]}</div>`);
    // Make wait and then open
   setTimeout(() => {
       window.open(github[1], `_blank`);
    
   }, 1000);
   show_all();
   input.value="";
  

}
function LinkedIn(){
    show_list.insertAdjacentHTML("beforeend",`<div class="typed">${linkedin[0]}</div>`);
    setTimeout(() => {
        window.open(linkedin[1], `_blank`);
     
    }, 1000);
    show_all();
    input.value="";
}
function Resume(){
    show_list.insertAdjacentHTML("beforeend",`<div class="typed">${resume[0]}</div>`);
    setTimeout(() => {
        window.open(resume[1], `_blank`);
     
    }, 1000);
    show_all();
    input.value="";
}
function Projects(){
    for(let i=0;i<projects.length;i++){
        show_list.insertAdjacentHTML("beforeend",`<div class="typed">${projects[i]}</div>`);
    }
    show_all();
    input.value="";
}
function Skills(){
    for(let i=0;i<skills.length;i++){
        show_list.insertAdjacentHTML("beforeend",`<div class="typed">${skills[i]}</div>`);
    }
    show_all();
    input.value="";
}




function Help(){
    for(let i=0;i<commands.length;i++){
        show_list.insertAdjacentHTML("beforeend",`<div class="typed">${commands[i]}</div>`);
    }
    show_all();
    input.value="";

}


// window onload make data.js file auto load without time taken
