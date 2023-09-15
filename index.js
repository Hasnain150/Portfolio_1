const animDiv=document.querySelector(".anim");
const newAnim=document.querySelector(".newAnim");
const footer=document.querySelector("footer");
const project=document.querySelector(".projects");
function one(){
    let Hey=`
    <span>H</span>
    <span>E</span>
    <span>Y</span>
    `
    animDiv.innerHTML=Hey;
    let arrayY=Array.from(animDiv.children).forEach((x)=>{
       x.classList.add("animation");
 
    })
}
function two(){
    let My=`
    <span>M</span>
    <span>Y</span>
    `
    animDiv.innerHTML=My;
    let arrayY=Array.from(animDiv.children).forEach((x)=>{
        x.classList.add("animation");
     
     })

}
function three(){
    let Name=`
    <span>N</span>
    <span>A</span>
    <span>M</span>
    <span>E</span>

    `
    animDiv.innerHTML=Name;
    let arrayY=Array.from(animDiv.children).forEach((x)=>{
        x.classList.add("animation");
     
     })
}
function four(){
    let Is=`
    <span>I</span>
    <span>S</span>
   

    `
    animDiv.innerHTML=Is;
    let arrayY=Array.from(animDiv.children).forEach((x)=>{
        x.classList.add("animation");
     
     })
}
function five(){
    let Hasnain=`
    <span>H</span>
                  <span>A</span>
                  <span>S</span>
                  <span>N</span>
                  <span>A</span>
                  <span>I</span>
                  <span>N</span>
   

    `
    animDiv.innerHTML=Hasnain;
    let arrayY=Array.from(animDiv.children).forEach((x)=>{
        x.classList.add("animation");
     
     })
}
function six(){
    let shahzad=`
    <span>S</span>
                  <span>H</span>
                  <span>A</span>
                  <span>H</span>
                  <span>Z</span>
                  <span>A</span>
                  <span>D</span>
   

    `
    animDiv.innerHTML=shahzad;
    let arrayY=Array.from(animDiv.children).forEach((x)=>{
        x.classList.add("animation");
     
     })
}
function L_and(){
    let and=`
                  <span>A</span>
                  <span>N</span>
                  <span>D</span>
                  
   

    `
    animDiv.innerHTML=and;
    let arrayY=Array.from(animDiv.children).forEach((x)=>{
        x.classList.add("animation");
     
     })
}
function L_iAmA(){
    let x=`
    <span>I</span>
                  <span> </span>
                  <span>A</span>
                  <span>M</span>
                  <span> </span>
                  <span>A</span>
   

    `
    animDiv.innerHTML=x;
    let arrayY=Array.from(animDiv.children).forEach((x)=>{
        x.classList.add("animation");
     
     })
}
function L_web(){
    let web=`
    <span>W</span>
                  <span>E</span>
                  <span>B</span>
                 
   

    `
    animDiv.innerHTML=web;
    let arrayY=Array.from(animDiv.children).forEach((x)=>{
        x.classList.add("animation");
     
     })
}
function L_developer(){
    let developer=`
    <span>D</span>
                  <span>E</span>
                  <span>V</span>
                  <span>E</span>
                  <span>L</span>
                  <span>O</span>
                  <span>P</span>
                  <span>E</span>
                  <span>R</span>

    `
    animDiv.innerHTML=developer;
    let arrayY=Array.from(animDiv.children).forEach((x)=>{
        x.classList.add("animation");
     
     })
}
async function intro2(){
    one();
    await new Promise((resolve)=>{
        setTimeout(()=>{
             two();
             resolve(true);
        },1200)
    })
    await new Promise((resolve)=>{
        setTimeout(()=>{
             three();
             resolve(true);
        },1000)
    }) 
    await new Promise((resolve)=>{
        setTimeout(()=>
        {
            four();
            resolve(true);
        },1000)
    })
    await new Promise((resolve)=>{
        setTimeout(()=>
        {
            five();
            resolve(true);
        },800)
    })
    await new Promise((resolve)=>{
        setTimeout(()=>
        {
            six();
            resolve(true);
        },2000)
    })
    await new Promise((resolve)=>{
        setTimeout(()=>
        {
            L_and();
            resolve(true);
        },2000)
    })
    await new Promise((resolve)=>{
        setTimeout(()=>
        {
            L_iAmA();
            resolve(true);
        },900)
    })
    await new Promise((resolve)=>{
        setTimeout(()=>
        {
            L_web();
            resolve(true);
        },1900)
    })
    await new Promise((resolve)=>{
        setTimeout(()=>
        {
            L_developer();
            resolve(true);
        },1000)
    })
    await new Promise((resolve)=>{
        setTimeout(() => {
            let margin=document.querySelector(".anim");
            margin.remove();
            resolve(true);
        }, 3000);
     
    })
    await new Promise((resolve)=>{
        setTimeout(() => {
            newAnim.style.display="block"
            resolve(true)
        }, 1000);
    })
}
intro2();

const dropMenubtn=document.querySelector("nav img");
const projectsBtn=document.querySelector("#projects");

function dropMenu(){
    let menu=document.querySelector(".dropMenu");
    menu.classList.toggle("displayFlex");
    let mainWebsite=document.querySelector("main");
    mainWebsite.classList.toggle("displayNone");
    footer.classList.toggle("displayNone");
}
dropMenubtn.addEventListener("click",dropMenu)
projectsBtn.addEventListener("click",()=>{
    window.location="/index2.html";
})

for(let i=0;i<project.children.length;i++){
    project.children[i]
}
const nextBtn=document.querySelector("#nextBtn")
const prevBtn=document.querySelector("#prevBtn")
// project.addEventListener("wheel",(e)=>{
//   e.preventDefault();
//   project.scrollLeft+=e.deltaY;
//     project.style.scrollBehaviour="auto"
//     console.log("slafj;s")
// })
nextBtn.addEventListener("click",()=>{
    project.style.scrollBehavior="smooth"
        project.scrollLeft+=1000;
})
prevBtn.addEventListener("click",()=>{
    project.scrollLeft-=1000;
    project.style.scrollBehavior="smooth"
})