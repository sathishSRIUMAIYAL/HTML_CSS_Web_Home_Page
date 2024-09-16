let burge = document.querySelector(".burger");
let Links=document.querySelector(".nav_link")
let Text_Area=document.querySelector(".text_center")

burge.addEventListener("click",()=>{
    Links.classList.toggle("nav-show");
    Text_Area.classList.toggle('text_move')

})