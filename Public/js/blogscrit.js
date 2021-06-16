
let showref= document.getElementById("showbox");
  let blogref= document.getElementById("popupo");

  showref.addEventListener('click',blogpop);
  function blogpop (){
    blogref.style.display="block";
    showref.style.display="none";
  }
  document.getElementById("closeb").addEventListener('click',sendpop);
  function sendpop(){
    blogref.style.display="none";
    showref.style.display="block";
  }