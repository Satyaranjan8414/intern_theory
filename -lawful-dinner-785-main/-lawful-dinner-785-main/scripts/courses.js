

  // Import EMI details
import { EMI_func } from "../components/EMI.js";
// Import Footer
// import { footer } from "../components/footer.js";

let boxes = document.querySelectorAll(".emi");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let div = document.createElement("div");
    div.id = "emi_box";
    // btn.addEventListener("click", () => {
    //   console.log("this");
    // });
    div.innerHTML = EMI_func();
    document.body.append(div);
  });
});

let box_cart = document.querySelectorAll(".add_course_cart");

box_cart.forEach((box) => {
  box.addEventListener("click", () => {
    let div = document.createElement("div");

    // btn.addEventListener("click", () => {
    //   console.log("this");
    // });
    box.innerHTML = "CHECKOUT";
    // let arr = localStorage.getItem(JSON.parse("data") || []);
    // arr.push("CHECKOUT");
    // localStorage.setItem("data", JSON.stringify(arr));
  });
});

// append footer
// let footer_box = document.getElementById("footer_container");
// footer_box.innerHTML = footer();

// console.log("hello")

document.getElementById("navimg").addEventListener("click",function(){

    myfunn()
});

function myfunn(){
    window.location.href="main.html"
}


// document.getElementById("s1").addEventListener("click",function(){
//     myfun()
// })
// function myfun(){
// // console.log("hello")
//     window.location.href="signup.html"
// }


