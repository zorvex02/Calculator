alert("Welcome to calculator")

let CE = 0;
CE = Number(CE)

document.getElementById("deepclear").onclick = function(){
  document.getElementById("textinput").value = CE;
}
let C = 0;
C = Number(CE)
document.getElementById("clear").onclick = function(){
  document.getElementById("textinput").value = C;
}
function addnumber(num) {
  let display = document.getElementById("textinput");
  if(display.value === "0"){
    display.value = num;
  }
  else{
    display.value += num;
  }
  }
let seven = 7;
 document.getElementById("seven").onclick = function(){
  addnumber("7");
 }

let eight = 8;
 document.getElementById("eight").onclick = function(){
    addnumber("8");
}
let nine = 9;
 document.getElementById("nine").onclick = function(){
  addnumber("9");
}
let six = 6;
 document.getElementById("six").onclick = function(){
    addnumber("6");
}
let five = 5;
 document.getElementById("five").onclick = function(){
  addnumber("5");
}
let four = 4;
 document.getElementById("four").onclick = function(){
  addnumber("4");
}
let three = 3;
 document.getElementById("three").onclick = function(){
  addnumber("3");
}
let two = 2;
 document.getElementById("two").onclick = function(){
  addnumber("2");;
}
let one = 1;
 document.getElementById("one").onclick = function(){
  addnumber("1");
}
let zero = 0;
 document.getElementById("zero").onclick = function(){
  addnumber("0");
 }

let addition = "+";
document.getElementById("addition").onclick = function(){
  addnumber("+");
}
let subtraction = "-";
document.getElementById("subtraction").onclick = function(){
  addnumber("-");

}
let multiplication = "x";
document.getElementById("multiplication").onclick = function(){
  addnumber("x");
}
let division = "÷";
document.getElementById("division").onclick = function(){
  addnumber("÷");
}
let decimalpoint = ".";
document.getElementById("decimalpoint").onclick = function(){
  addnumber(".");
}
  let display = document.getElementById("textinput");

document.getElementById("backspace").onclick = function(){
  if(display.value.length > 1){
    display.value = display.value.slice(0, -1);
  }
  else{
    display.value = "0";
  }
  console.log("clicked");
}
document.getElementById("equalsign").onclick = function(){

  let result = 0;
  let part;
  let display = document.getElementById("textinput").value;

  if(display.includes("+")){
    part = display.split("+");
    for(let i = 0; i < part.length; i++){
      result += Number(part[i]);
    }
  }
  else if(display.includes("-")){
    part = display.split("-");
    result = Number(part[0]);
    for(let i = 1; i < part.length; i++){
      result -= Number(part[i]);
    }
  }
  else if(display.includes("x")){
    part = display.split("x");
    result = Number(part[0]);
    for(let i = 1; i < part.length; i++){
      result *= Number(part[i]);
    }
  }
  else if(display.includes("÷")){
    part = display.split("÷");
    result = Number(part[0])
    for(let i = 1; i < part.length; i++){
      result /= Number(part[i]);
    }
  }
  document.getElementById("textinput").value = result;
}                                            
                                                                      