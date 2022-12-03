let side = document.querySelector(".sidebar");

// let btn = document.querySelector("button");
let slider = document.getElementById("slider");
let closeBtn = document.getElementById("close");

slider.addEventListener("click", function () {
  side.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  side.style.display = "none";
});

let num = 1;
const course = () => {
  // console.log("working");
  if (num % 2 != 0) {
    num++;
    document.getElementById("opt1").style.display = "block";
    console.log("working ", num);
  } else {
    document.getElementById("opt1").style.display = "none";
    num++;
    console.log("working", num);
  }
};

let num1 = 1;
const register = () => {
  if (num1 % 2 != 0) {
    num1++;
    document.getElementById("reg").style.display = "block";
    console.log("working ", num1);
  } else {
    document.getElementById("reg").style.display = "none";
    num1++;
    console.log("working", num1);
  }
};
let num2 = 1;
const login = () => {
  if (num2 % 2 != 0) {
    num2++;
    document.getElementById("log").style.display = "block";
    console.log("working ", num2);
  } else {
    document.getElementById("log").style.display = "none";
    num2++;
    console.log("working", num2);
  }
};
