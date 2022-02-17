// $("i").click(function(){
//   $("i").html("hi");
// });

// var pass=document.getElementById("")

function signupCheck(){
  // var p="floatingPassword"+n;
  // var c="floatingPasswordConfirm"+n;
  // var pass=document.getElementById(p).innerHtml;
  // var confirmPass=document.getElementById(c).innerHtml;
  // if(pass==confirmPass){
  //   alert("signup successful");
  // }
  // else{
  //   alert("signup unsuccessful");
  // }
  // document.getElementById("floatingInput1").required = true;
  // document.getElementById("psw").required = true;
  // document.getElementById("floatingPasswordConfirm").required = true;
  if(document.getElementById("floatingInput1").value.length==0 || document.getElementById("psw").value.length==0 || document.getElementById("floatingPasswordConfirm").value.length==0){
    alert("All fields must be filled !!");
  }
  else{
    var x=ValidateEmail(document.form1.email1);
    if(x==true){
      checkPass();
    }
    else{
      alert("You have entered an invalid email address!");
    }
  }
}



function ValidateEmail(inputText)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // if(inputText.value.length==0){
  //   alert("Enter the email address!!");
  // }
if(inputText.value.match(mailformat))
  {
    // alert("Valid email address!");
    return true;
  }
  else
  {
    // alert("You have entered an invalid email address!");
    return false;
  }
}

function checkPass(){
  var pass=document.getElementById("psw");
  // var confirmPass=document.form1.masterPasswordCofirm1;
  var confirmPass=document.getElementById("floatingPasswordConfirm");
  // if(pass.value.length==0 && confirmPass.value.length==0){
  //   alert("Fill out the password and Master Password fields");
  // }
 if(pass.value==confirmPass.value){
    alert("Signup Successful");
    window.open("home.html","_self");
  }
  else{
    alert("Signup Unsuccessful. Password and Confirm Password fields should match");
  }
}

// var myInput = document.getElementById("psw");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");
//
// // When the user clicks on the password field, show the message box
// myInput.onfocus = function() {
//   document.getElementById("message").style.display = "block";
// }
//
// // When the user clicks outside of the password field, hide the message box
// myInput.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }
//
// // When the user starts to type something inside the password field
// myInput.onkeyup = function() {
//   // Validate lowercase letters
//   var lowerCaseLetters = /[a-z]/g;
//   if(myInput.value.match(lowerCaseLetters)) {
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
//   }
//
//   // Validate capital letters
//   var upperCaseLetters = /[A-Z]/g;
//   if(myInput.value.match(upperCaseLetters)) {
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   }
//
//   // Validate numbers
//   var numbers = /[0-9]/g;
//   if(myInput.value.match(numbers)) {
//     number.classList.remove("invalid");
//     number.classList.add("valid");
//   } else {
//     number.classList.remove("valid");
//     number.classList.add("invalid");
//   }
//
//   // Validate length
//   if(myInput.value.length >= 8) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }
// }

function showFunction() {
  var x = document.getElementById("psw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function showFunctionC() {
  var x = document.getElementById("floatingPasswordConfirm");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function signin(){
  if(document.getElementById("floatingInput4").value.length==0 || document.getElementById("floatingPassword4").value==0){
    alert("Fill out all the fields!!");
  }
  else{
    var e=document.getElementById("floatingInput4").value;
    var p=document.getElementById("floatingPassword4").value;

    if(e=="nikamaditi04@gmail.com" && p=="aditi123"){
      alert("Signin successful !");
      window.open("myVault.html","_self");
    }
    else{
      alert("Signin unsuccessful !");

    }
  }

}
