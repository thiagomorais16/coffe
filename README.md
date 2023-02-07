# coffe #html #css #javascript #bootstrap

a login-page criada com linguagem simples do bootstrap foi adicianada no java script
a funcionalidade  do modal no html teve uma leve mudança nas tags de uma div para dialog
<dialog class="dialogo">
      <div class="modal-dialog">
          <div class="modal-content p-5">
              <div>
                  <button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
              </div> 
             <h2 class="text-center fw-light">Quem somos nós? </h2>
              <p class="p-3 fw-light text-center">Tudo o que fazemos procura respeitar essa conexão, desde nosso compromisso com o café de melhor qualidade do mundo até a forma como nós interagimos com nossos clientes e nossas comunidades para conduzir nosso negócio de modo responsável.
              </p>       
      
              <img src="./assets/images/sobre.png" width="100" class="mx-auto">
              
          </div>
      </div>
  </dialog>
  no javas script foi adicionada a funcionalidade:
  
  const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")

button.onclick = function(){
   modal.showModal()
}
buttonClose.onclick = function(){
   modal.close()
}
já os cards foi adicionado uma funcionalidade para detectar o movimento mais perto do aparecimento do botão:

var card3 = document.querySelector("#card3");

  card3.addEventListener("mouseover", function() {
    var button = document.querySelector("#buttonOver3");

    button.classList.remove("btn-dark");
   
   });

   
card3.addEventListener("mouseout", function(){
   var button = document.querySelector("#buttonOver3");

   button.classList.add("btn-dark");
  
  });
  fazendo assim o botão aparecer e desaperecer com o movimento do mouse
  
  
