

$(document).ready(function(){
  
  $(".header-burger").click(function (event) {
    $(".header-burger, .header-menu").toggleClass("active");
    $("body").toggleClass("lock");
  });


   
  $('#stick1 #click1').click(function(){
    $(this).next().slideToggle('slow');
    $("#d-arrow1").toggleClass('transform');
   })
   $('#stick2 #click2').click(function(){
    $(this).next().slideToggle('slow');
    $("#d-arrow2").toggleClass('transform');
   })
   $('#stick3 #click3').click(function(){
    $(this).next().slideToggle('slow');
    $("#d-arrow3").toggleClass('transform');
   })
   $('#stick4 #click4').click(function(){
    $(this).next().slideToggle('slow');
    $("#d-arrow4").toggleClass('transform');
   })
   $('#stick5 #click5').click(function(){
    $(this).next().slideToggle('slow');
    $("#d-arrow5").toggleClass('transform');
   })
   $('#stick6 #click6').click(function(){
    $(this).next().slideToggle('slow');
    $("#d-arrow6").toggleClass('transform');
   })

   $("#plan1 #planclick1").click(function(){
    $(this).next().slideToggle(1000);
    $("#planarr1").toggleClass('transform');
   });
   $("#plan2 #planclick2").click(function(){
    $(this).next().slideToggle(1000);
    $("#planarr2").toggleClass('transform');
   });
   $("#plan3 #planclick3").click(function(){
    $(this).next().slideToggle(1000);
    $("#planarr3").toggleClass('transform');
   });
   $("#plan4 #planclick4").click(function(){
    $(this).next().slideToggle(1000);
    $("#planarr4").toggleClass('transform');
   });







   var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");



var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}
btn3.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



   
  });

  const currentScroll = window.pageYOffset;
if (currentScroll > 0) {
  document.getElementsByClassName("header").style.backgroundColor = "white";
}

var timer;
var ele = document.getElementById('timer');

(function (){
  var sec = 0;
  timer = setInterval(()=>{
    ele.innerHTML = '00:'+sec;
    sec ++;
  }, 1000) // each 1 second
})() 


  

  

  
  
