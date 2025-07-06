const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e)=>{
console.log(e.target);
console.log(e.currentTarget);
})