var firstName = document.querySelector(".first-name");
var lastName = document.querySelector(".last-name");
var password = document.querySelector(".password");
var email = document.querySelector(".email");
var x, y;

document.querySelector(".box button").addEventListener("click", check );

function check(){

  if (firstName.value == "") {
    error (".first-name", ".name-error" );
  }

  if(lastName.value == ""){
    error(".last-name", ".last-error");
  }

  if (password.value==""){
    error(".password", ".password-error")
  }


  // if(email.value.match(re)){
  //   alert("YAAAAAAA")
  // }
 valEmail()


}

function error(x, y) {
    document.querySelector(y).style.display = "block";

    document.querySelector(x).setAttribute("placeholder", "") ;
    document.querySelector(x).style.backgroundImage = "url('images/icon-error.svg')";
    document.querySelector(x).style.backgroundRepeat = "no-repeat";
    document.querySelector(x).style.backgroundPosition = "97% 50%"
}


function valEmail(){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if  (re.test(email.value)){
    return true;
  }else{
    errorEmail();
  }
}
function errorEmail(){
  document.querySelector(".email-error").style.display = "block";


  email.setAttribute("placeholder", "email@example/com") ;
  email.classList.add("email-red");

  email.style.backgroundImage = "url('images/icon-error.svg')";
  email.style.backgroundRepeat = "no-repeat";
  email.style.backgroundPosition = "97% 50%";

}
