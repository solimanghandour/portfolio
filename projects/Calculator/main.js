function multiple(){
    var number1=document.getElementById("num1").value
    var number2=document.getElementById("num2").value
   
    document.getElementById("result").innerHTML=number1*number2
}
function sum(){
    var number1=Number(document.getElementById('num1').value)
    var number2=Number(document.getElementById('num2').value)
    document.getElementById("result").innerHTML=number1+number2
}
function subtract(){
    var number1=document.getElementById("num1").value
    var number2=document.getElementById("num2").value
    document.getElementById("result").innerHTML=number1-number2
}
function division(){
var number1=document.getElementById("num1").value
var number2=document.getElementById("num2").value
document.getElementById("result").innerHTML=number1/number2

}