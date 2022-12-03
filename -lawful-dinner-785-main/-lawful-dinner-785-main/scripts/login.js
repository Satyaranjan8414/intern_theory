
let arr = JSON.parse(localStorage.getItem("user")) || []

document.getElementById("next").addEventListener("click",function(){
    
    newLog()
})
 console.log(arr)

const newLog = () => {

    let name1 = document.getElementById("mail").value;
    let pass1 = document.getElementById("password").value;


    let obj = {
        name : name1,
        pass : pass1
    }

    detail(obj)

}

const detail = (obj) => {
    let count = 0;
    let temp = 0;

    let arr = JSON.parse(localStorage.getItem("user"))

    arr.forEach(function(ele){

        if(ele.email == obj.name && ele.password == obj.pass){

            count++
            // alert("hello")
        }else{

            temp++
            // alert("no")
        }
    })
    if(count >= 1 && temp < arr.length){
        
        window.location.href = "main.html"
        alert("Login Successful😊")
    }else{
        alert("Login Unsuccessful!🥺")
    }

}

document.getElementById("navimg").addEventListener("click",function(){

    myfunn()
});

function myfunn(){
    window.location.href="main.html"
}

document.getElementById("create").addEventListener("click",function(){
    myown()
});

function myown(){
    window.location.href="signup.html"
}

