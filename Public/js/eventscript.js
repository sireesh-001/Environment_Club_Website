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



// Set the date we're counting down to
var countDownDate = new Date("May 26, 2021 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  if(days<=9)
  {
    document.getElementById("day").innerHTML ="0"+days;
  }
  else
  document.getElementById("day").innerHTML =days;
 
  // days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";
  //hrs
  if(hours<=9)
  {
    document.getElementById("hr").innerHTML ="0"+ hours;
  }
  else
  document.getElementById("hr").innerHTML = hours;
 //min
  if(minutes<=9)
  {
    document.getElementById("min").innerHTML = "0"+minutes;
  }
  else
  document.getElementById("min").innerHTML = minutes;

//secs  
if(seconds<=9)
  {
    document.getElementById("min").innerHTML = "0"+seconds;
  }
  else
  document.getElementById("sec").innerHTML = seconds;

  var d=document.createElement("i");
  var dnode=document.createTextNode("Days");
  d.appendChild(dnode);

  var element = document.getElementById("day");
element.appendChild(d);


var h=document.createElement("i");
  var hnode=document.createTextNode("Hrs");
  h.appendChild(hnode);

  var element = document.getElementById("hr");
element.appendChild(h);

var m=document.createElement("i");
  var mnode=document.createTextNode("mins");
  m.appendChild(mnode);

  var element = document.getElementById("min");
element.appendChild(m);

var s=document.createElement("i");
  var snode=document.createTextNode("secs");
  s.appendChild(snode);

  var element = document.getElementById("sec");
element.appendChild(s);
  // If the count down is over, write some text 

  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
    document.getElementById("day").innerHTML ='00';
 
  // days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";
  document.getElementById("hr").innerHTML = '00';
  document.getElementById("min").innerHTML = '00';
  document.getElementById("sec").innerHTML = '00';

  var d=document.createElement("i");
  var dnode=document.createTextNode("Days");
  d.appendChild(dnode);

  var element = document.getElementById("day");
element.appendChild(d);


var h=document.createElement("i");
  var hnode=document.createTextNode("Hrs");
  h.appendChild(hnode);

  var element = document.getElementById("hr");
element.appendChild(h);

var m=document.createElement("i");
  var mnode=document.createTextNode("mins");
  m.appendChild(mnode);

  var element = document.getElementById("min");
element.appendChild(m);

var s=document.createElement("i");
  var snode=document.createTextNode("secs");
  s.appendChild(snode);

  var element = document.getElementById("sec");
element.appendChild(s);
  }
}, 1000);


//timer for registeration
var countDownregDate = new Date("May 25, 2021 23:59:00").getTime();

// Update the count down every 1 second
var y = setInterval(function() {

  // Get today's date and time
  var nowreg = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distancey = countDownregDate - nowreg;
    
  // Time calculations for days, hours, minutes and seconds
  var rdays = Math.floor(distancey / (1000 * 60 * 60 * 24));
  var rhours = Math.floor((distancey % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var rminutes = Math.floor((distancey % (1000 * 60 * 60)) / (1000 * 60));
  var rseconds = Math.floor((distancey % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("reg").innerHTML = " "+rdays + "d " + rhours + "h "
  + rminutes + "m " + rseconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(y);
    document.getElementById("reg").innerHTML = "EXPIRED";
  }
}, 1000);

//regform

var btnref= document.getElementById("regbtn2");
btnref.addEventListener('click', popout );

function popout(){
  document.getElementById("pops").style.display="block";
  document.getElementById("ok2").addEventListener("click",closep);
  //       document.getElementById("ok").addEventListener('click',close);
  //       document.getElementById("ok").addEventListener('click',clear);
}
function closep(){
  document.getElementById("pops").style.display="none";
  
  }

  //formlink
  var linkbtnref= document.getElementById("regbtn1");
linkbtnref.addEventListener('click', linkTo );

var linkbtnref1= document.getElementById("regbtn");
linkbtnref1.addEventListener('click', linkTo );

function linkTo(){
  // alert("can see me");
  window.open("/reg#regf");
}
