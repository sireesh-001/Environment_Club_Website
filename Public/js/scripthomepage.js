window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myheader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



//form
// let formref = document.getElementById("myform");
// formref.addEventListener('submit', function(event) {
//     let form = event.target;
//    let errors = false;
//    event.preventDefault();
//    validate();

//    if(!errors) {
//     form.submit()
// }
// });
document.querySelector('#myButton').addEventListener('click', function(event) {
  event.preventDefault();
  validate();});        

  function validate()
  {  
      let  submit = true;
      var x = document.forms["myform"]["fname"].value;
      var z = document.forms["myform"]["Email"].value;
      var y = document.forms["myform"]["lname"].value;
      var w = document.forms["myform"]["Feedback"].value;

     

      if (x == null || x == "") {
          nameError = "Please fill out this field";
          document.getElementById("f_name_error").innerHTML = nameError;
          submit = false;
          errors=true;
      }

      if (y == null || y == "") {
          emailError = "Please fill out this field";
          document.getElementById("l_name_error").innerHTML = emailError;
          submit = false;
          errors=true;
      }
      
      var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (z == null || z == ""|| !(z.match(mailformat))) {
          emailError = "Please enter a valid email id";
          document.getElementById("email_error").innerHTML = emailError;
          submit = false;
          errors=true;
      }

      if (w == null || w == "") {
          txtError = "Please fill out this field";
          document.getElementById("feed_back_error").innerHTML = txtError;
          submit = false;
          errors=true;

         
      }
      
      if(submit == true)
      { 
          
          
          showpop();
          
      }
  return errors;
  }

  

  function removeWarning() {
      document.getElementById(this.id + "_error").innerHTML = "";
  }

  document.getElementById("f_name").onkeyup = removeWarning;
  document.getElementById("l_name").onkeyup = removeWarning;
  document.getElementById("email").onkeyup = removeWarning;
  document.getElementById("feed_back").onkeyup = removeWarning;

          
  function showpop() {
  document.getElementById("pop").style.display="block";
  document.getElementById("ok").addEventListener('click',close);
  document.getElementById("ok").addEventListener('click',clear);
  }

  function close(){
  document.getElementById("pop").style.display="none";
  document.getElementById("myform").submit(true);
  
  
  }

  function clear()
  {
      document.getElementById("myform").reset();

  }
