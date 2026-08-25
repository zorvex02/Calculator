document.getElementById("deepclear").onclick = () => {
  document.getElementById("textinput").value = "0";
};
document.getElementById("clear").onclick = () => {
  document.getElementById("textinput").value = "0";
};

function addnumber(num) {
  let display = document.getElementById("textinput");
  if (display.value === "0") {
    display.value = num;
  } else {
    display.value += num;
  }
}

document.getElementById("seven").onclick = function () { addnumber("7"); };
document.getElementById("eight").onclick = function () { addnumber("8"); };
document.getElementById("nine").onclick = function () { addnumber("9"); };
document.getElementById("six").onclick = function () { addnumber("6"); };
document.getElementById("five").onclick = function () { addnumber("5"); };
document.getElementById("four").onclick = function () { addnumber("4"); };
document.getElementById("three").onclick = function () { addnumber("3"); };
document.getElementById("two").onclick = function () { addnumber("2"); };
document.getElementById("one").onclick = function () { addnumber("1"); };
document.getElementById("zero").onclick = function () { addnumber("0"); };
document.getElementById("addition").onclick = function () { addnumber("+"); };
document.getElementById("subtraction").onclick = function () { addnumber("-"); };
document.getElementById("multiplication").onclick = function () { addnumber("x"); };
document.getElementById("division").onclick = function () { addnumber("÷"); };
document.getElementById("square-root").onclick = function () { addnumber("√"); };
document.getElementById("fraction").onclick = function () { addnumber("/"); };
document.getElementById("square").onclick = function () { addnumber("²"); };
document.getElementById("percent").onclick = function () { addnumber("%"); };
document.getElementById("decimalpoint").onclick = function () { addnumber("."); };

let display = document.getElementById("textinput");

document.getElementById("backspace").onclick = function () {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "0";
  }
};

document.getElementById("equalsign").onclick = function () {
  let result = 0;
  let part;
  let displayVal = document.getElementById("textinput").value;

  if (displayVal.includes("+")) {
    part = displayVal.split("+");
    for (let i = 0; i < part.length; i++) {
      result += Number(part[i]);
    }
  } else if (displayVal.includes("-")) {
    part = displayVal.split("-");
    result = Number(part[0]);
    for (let i = 1; i < part.length; i++) {
      result -= Number(part[i]);
    }
  } else if (displayVal.includes("x")) {
    part = displayVal.split("x");
    result = Number(part[0]);
    for (let i = 1; i < part.length; i++) {
      result *= Number(part[i]);
    }
  } else if (displayVal.includes("÷")) {
    part = displayVal.split("÷");
    result = Number(part[0]);
    for (let i = 1; i < part.length; i++) {
      result /= Number(part[i]);
    }
  } else if (displayVal.includes("/")) {
    part = displayVal.split("/");
    result = Number(part[0]);
    for (let i = 1; i < part.length; i++) {
      result /= Number(part[i]);
    }
  } else if (displayVal.includes("√")) {
    part = displayVal.replace("√", "");
    result = Math.sqrt(Number(part));
  } else if (displayVal.includes("²")) {
    part = displayVal.replace("²", "");
    result = Math.pow(Number(part), 2);
  } else if (displayVal.includes("%")) {
    part = displayVal.replace("%", "");
    result = Number(part) / 100;
  }

  document.getElementById("textinput").value = result;
};
  
