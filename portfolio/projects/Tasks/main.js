let input=document.querySelectorAll("input")
let btn=document.getElementById("btn")
let alert1=document.getElementById("alert1")
let notask=document.getElementById("notask")
let alltask=document.getElementById("alltask")




let resetinput=()=>{
for(let i=0;i<input.length;i++){
input[i].value=``
}}



let notasksChecker=()=>{
if(alltask.childElementCount==0){
notask.style.display="block"
}}




btn.onclick=function(){
    if(input[0].value.trim()=="" | input[1].value.trim()==""){
if(input[0].value.trim()==""){
    alert1.style.display="block"
    alert1.innerText=`you must enter Name`
}
else if(input[1].value.trim()==""){
    alert1.style.display="block"
    alert1.innerText=`you must enter Date`
}


    }else{
        notask.style.display="none"
        alert1.style.display="none"
        alltask.innerHTML+=` <div>
        ${input[0].value.trim()}
        <i class="Delete fa-sharp fa-solid fa-circle-xmark"></i>
        <p>${input[1].value.trim()}</p>
        </div> `
        resetinput()
    }}

    

    document.addEventListener("click",function(t){
        if(t.target.classList.contains("Delete")){
            t.target.parentElement.remove();
            notasksChecker();
        }


    }
    
    )
 