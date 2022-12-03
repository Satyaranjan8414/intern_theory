
  let num=1
  let side=document.querySelector(".sidebar")


  // let btn = document.querySelector("button");
    let slider = document.getElementById("slider");
    let closeBtn = document.getElementById("close");

    slider.addEventListener("click", function () {
      side.style.display = "block";
    });
    closeBtn.addEventListener("click", function () {
      side.style.display = "none";
    });

    document.getElementById("navimg").addEventListener("click",function(){

        myfunn()
    });
    
    function myfunn(){
        window.location.href="main.html"
    }

