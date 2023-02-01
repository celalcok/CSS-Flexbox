const rfd1 = document.getElementById("rfd1");
const rfd2 = document.getElementById("rfd2");
const jcr1 = document.getElementById("jcr1");
const jcr2 = document.getElementById("jcr2");
const jcr3 = document.getElementById("jcr3");
const jcr4 = document.getElementById("jcr4");
const jcr5 = document.getElementById("jcr5");
const jcr6 = document.getElementById("jcr6");
const air1 = document.getElementById("air1");
const air2 = document.getElementById("air2");
const air3 = document.getElementById("air3");
const container = document.getElementById("itemsContainer");
const info = document.getElementById("info");
info.innerHTML = "Please select! ";


rfd1.addEventListener("click",function(){
    container.style.flexDirection="row";
    info.innerHTML = "Flex Direction: "+ this.nextElementSibling.innerHTML;
})
rfd2.addEventListener("click",function(){
    container.style.flexDirection="column";
    info.innerHTML = "Flex Direction: "+ this.nextElementSibling.innerHTML;
})
jcr1.addEventListener("click",function(){
    container.style.justifyContent="flex-start";
    info.innerHTML = "Justify Content: "+ this.nextElementSibling.innerHTML;
})
jcr2.addEventListener("click",function(){
    container.style.justifyContent="center";
    info.innerHTML = "Justify Content: "+ this.nextElementSibling.innerHTML;

})
jcr3.addEventListener("click",function(){
    container.style.justifyContent="space-between";
    info.innerHTML = "Justify Content: "+ this.nextElementSibling.innerHTML;

})
jcr4.addEventListener("click",function(){
    container.style.justifyContent="space-around";
    info.innerHTML = "Justify Content: "+ this.nextElementSibling.innerHTML;

})
jcr5.addEventListener("click",function(){
    container.style.justifyContent="space-evenly";
    info.innerHTML = "Justify Content: "+ this.nextElementSibling.innerHTML;

})

jcr6.addEventListener("click",function(){
    container.style.justifyContent="flex-end";
    info.innerHTML = "Justify Content: "+ this.nextElementSibling.innerHTML;

})
air1.addEventListener("click",function(){
    container.style.alignItems="flex-start";
    info.innerHTML = "Align Items: "+ this.nextElementSibling.innerHTML;

})
air2.addEventListener("click",function(){
    container.style.alignItems="center";
    info.innerHTML = "Align Items: "+ this.nextElementSibling.innerHTML;

})
air3.addEventListener("click",function(){
    container.style.alignItems="flex-end";
    info.innerHTML = "Align Items: "+ this.nextElementSibling.innerHTML;

})
