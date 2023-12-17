let btn1= document.querySelector("#btnn");
let body= document.querySelector("body");
let curentmode= "light";
btn1.addEventListener("click",()=>{
    if(curentmode==="light"){
        curentmode= "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        curentmode= "light";
       body.classList.add("light");
       body.classList.remove("dark");
    }

  console.log(curentmode);
}); 