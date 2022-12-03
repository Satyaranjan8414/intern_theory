
function details(n,ln,em,p){

    this.name = n;
    this.lastname = ln;
    this.email = em;
    this.password = p
}
let arr = JSON.parse(localStorage.getItem("user")) || []

document.getElementById("next").addEventListener("click",function(){
    myfun()
})

const myfun = () => {

    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lName").value;
    let email = document.getElementById("mail").value;
    let password = document.getElementById("password").value;

    let s1 = new details(name,lastName,email,password)

    if(s1.name == "" || s1.lastName == "" || s1.email == "" || s1.password == ""){
        alert("Some Fields are missing")
    }else{
        arr.push(s1)

        localStorage.setItem("user",JSON.stringify(arr))
        console.log(arr)
        window.location.href = "login.html"
        alert("Registration Successful!😊")
        
    }

}

document.getElementById("facebook").addEventListener("click",function(){
    newfunction()
})

function newfunction(){
    window.location.href="https://www.facebook.com/login/"
}

document.getElementById("navimg").addEventListener("click",function(){

    myfunn()
});

function myfunn(){
    window.location.href="main.html"
}

