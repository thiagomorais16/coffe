// evento do mouseover
var card = document.querySelector("#card0");
var card1 = document.querySelector("#card1");
var card2 = document.querySelector("#card2");
var card3 = document.querySelector("#card3");

card.addEventListener("mouseover", function() {
     var button = document.querySelector("#buttonOver");

     button.classList.remove("text");
    
    });

    
card.addEventListener("mouseout", function(){
    var button = document.querySelector("#buttonOver");

    button.classList.add("text");
   
   });

   card1.addEventListener("mouseover", function() {
    var button = document.querySelector("#buttonOver1");

    button.classList.remove("text");
   
   });

   
card1.addEventListener("mouseout", function(){
   var button = document.querySelector("#buttonOver1");

   button.classList.add("text");
  
  });

  card2.addEventListener("mouseover", function() {
    var button = document.querySelector("#buttonOver2");

    button.classList.remove("text");
   
   });

   
card2.addEventListener("mouseout", function(){
   var button = document.querySelector("#buttonOver2");

   button.classList.add("text");
  
  });
  card3.addEventListener("mouseover", function() {
    var button = document.querySelector("#buttonOver3");

    button.classList.remove("text");
   
   });

   
card3.addEventListener("mouseout", function(){
   var button = document.querySelector("#buttonOver3");

   button.classList.add("text");
  
  });


