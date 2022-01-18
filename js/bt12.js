const signin = document.getElementById("signin");
signin.onclick = function() {
    document.getElementById("signinbox").style.display = "block";
    document.getElementById("loginbox").style.display = "none";
}


const gotosign = document.getElementById("gotosign");
gotosign.onclick = function() {
    document.getElementById("signinbox").style.display = "block";
    document.getElementById("loginbox").style.display = "none";
}


const registerLogin = document.getElementById("register login")
registerLogin.onclick = function() {
    document.getElementById("loginbox").style.display = "block";
    document.getElementById("signinbox").style.display = "none";
}

const login = document.getElementById("login")
login.onclick = function() {
    document.getElementById("loginbox").style.display = "block";
    document.getElementById("signinbox").style.display = "none";
}

document.getElementById("help").onclick = function() {
    alert('Check console / F12 to see your previous password')
}

let username = document.getElementById("username").value
let password = document.getElementById("password").value
let username1 = document.getElementById("username1").value
let password1 = document.getElementById("password1").value
let pass2 = document.getElementById("password-repeat").value

const checkbox = document.getElementById("checkbox")
checkbox.onclick = function() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    console.log(username)
    console.log(password)
    return username + password;
}

document.getElementById("show").onclick = function() {
    let password = document.getElementById("password")
    let show = document.getElementById("show")
    if (password.type == "password"){
        password.type = "text";
        show.value = "Hide password"
    }
    else {
        password.type = "password"
        
    }
}

document.getElementById("show1").onclick = function() {
    let password1 = document.getElementById("password1")
    let pass2 = document.getElementById("password-repeat")
    let show = document.getElementById("show1")
    if (password1.type == "password"){
        password1.type = "text";
        pass2.type = "text"
        show.value = "Hide password"
    }
    else {
        password1.type = "password"
        pass2.type="password"
        
    }
}


document.getElementById("login").onmouseover = function() {mouseOver()};
document.getElementById("login").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("login").style.color = "gold";
}
function mouseOut() {
    document.getElementById("login").style.color = "white";
}


document.getElementById("signin").onmouseover = function() {mouseOver1()};
document.getElementById("signin").onmouseout = function() {mouseOut1()};

function mouseOver1() {
  document.getElementById("signin").style.color = "red";
}
function mouseOut1() {
    document.getElementById("signin").style.color = "rgb(34, 166, 189)";
  }



let value = true;

function submit1() {
    let username1 = document.getElementById("username1").value
    let password1 = document.getElementById("password1").value
    let pass2 = document.getElementById("password-repeat").value
    if (username1 == "") {
     document.getElementById("hide1").style.display = "block";
     value = false;
    }
    if (username1 !== "") {
        document.getElementById("hide1").style.display = "none";
        value = false;
       }
    if (password1 === "") {
     document.getElementById("hide2").style.display = "block";
     value = false;
    }
    if (password1 !== "") {
        document.getElementById("hide2").style.display = "none";
        value = false;
       }
    if (pass2 === "") {
    document.getElementById("hide3").style.display = "block";
    value = false;
    }
    if (pass2 !== "") {
        document.getElementById("hide3").style.display = "none";
        value = false;
        }
    if (password1.length < 8) {
    document.getElementById("hide").style.display = "block";
    value = false;
    }
    if (password1.length >= 8) {
        document.getElementById("hide").style.display = "none";
        value = false;
        }
    if (password1 !== pass2) {
        document.getElementById("hide4").style.display = "block";
        document.getElementById("hide2").style.display = "none";
        value = false;
    }
    else if (username1 !== "" && pass2 !== "" && password1 === pass2) {
        document.getElementById("hide5").style.display = "block";
        document.getElementById("hide4").style.display = "none";
        console.log(username1);
        console.log(password1);
        return username1 + password1;
    }
}

function submit2() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let username1 = document.getElementById("username1").value
    let password1 = document.getElementById("password1").value
    let pass2 = document.getElementById("password-repeat").value
       if (username === "") {
        document.getElementById("hide7").style.display = "block";
        value = false;
       }
       if (username !== "") {
        document.getElementById("hide7").style.display = "none";
        value = false;
       }
       if (password === "") {
        document.getElementById("hide8").style.display = "block";
        value = false;
       }
       if (password !== "") {
        document.getElementById("hide8").style.display = "none";
        value = false;
       }
       if (password.length < 8) {
        document.getElementById("hide9").style.display = "block";
        value = false;
       }
       if (password.length >= 8) {
        document.getElementById("hide9").style.display = "none";
        value = false;
       }
       if ( username !== username1 || password !== password1) {
        document.getElementById("hide12").style.display = "block";
           
       }
       else if (username === username1 && password === password1 && username !=="" && password === pass2) {
           document.getElementById("hide11").style.display = "block";
           document.getElementById("hide12").style.display = "none";
           console.log(username);
           console.log(password);
           
       }
       
}

document.getElementById("terms").onclick = function() {
    alert ('There are no Terms, just sign up :v')
}