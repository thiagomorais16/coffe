// evento do mouseover
var card = document.querySelector("#card0");
var card1 = document.querySelector("#card1");
var card2 = document.querySelector("#card2");
var card3 = document.querySelector("#card3");


card.addEventListener("mouseover", function() {
     var button = document.querySelector("#buttonOver");

     button.classList.remove("btn-dark");
    
    });

    
card.addEventListener("mouseout", function(){
    var button = document.querySelector("#buttonOver");

    button.classList.add("btn-dark");
   
   });

   card1.addEventListener("mouseover", function() {
    var button = document.querySelector("#buttonOver1");

    button.classList.remove("btn-dark");
   
   });

   
card1.addEventListener("mouseout", function(){
   var button = document.querySelector("#buttonOver1");

   button.classList.add("btn-dark");
  
  });

  card2.addEventListener("mouseover", function() {
    var button = document.querySelector("#buttonOver2");

    button.classList.remove("btn-dark");
   
   });

   
card2.addEventListener("mouseout", function(){
   var button = document.querySelector("#buttonOver2");

   button.classList.add("btn-dark");
  
  });
  card3.addEventListener("mouseover", function() {
    var button = document.querySelector("#buttonOver3");

    button.classList.remove("btn-dark");
   
   });

   
card3.addEventListener("mouseout", function(){
   var button = document.querySelector("#buttonOver3");

   button.classList.add("btn-dark");
  
  });

//modal
const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")

button.onclick = function(){
   modal.showModal()
}
buttonClose.onclick = function(){
   modal.close()
}
