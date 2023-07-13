 //let firstCard = getRandomCard();
 //let secondCard= getRandomCard();
 let cards = []  //array
 let sum = 0;
 let hasBlackJack = false;
 let isAlive = false;
 let message =""
 let messageEl = document.getElementById("message-el")
 console.log(messageEl)
 let sumEl = document.getElementById("sum-el")
 let cardEl = document.getElementById("card-el")
 let winner = new Audio("claps.mp3")
 let gameover = new Audio("gameover.wav")
 
 let player ={
   pname : "Jahanvi",
   chip : 145

  }
 
 let playerEl = document.getElementById("player-el")
 playerEl.textContent = player.pname +": $"+player.chip

    function getRandomCard(){
      let randomNumber = Math.floor(Math.random() * 13) +1
      if(randomNumber >10){
         return 10

      } else if(randomNumber === 1){
         return 11

      }else{
      return randomNumber
   }

    }
    
   function startGame(){
      isAlive = true
      let firstCard = getRandomCard();
      let secondCard= getRandomCard();
      cards = [firstCard,secondCard]  //array
      sum = firstCard + secondCard;
      renderGame();
   }
   function renderGame(){
      //render out firstCard and secondCard
      cardEl.textContent = "Cards :"
      for(let i=0; i < cards.length; i++){
         cardEl.textContent += cards[i] +" "

      }
      //render out all the cards
      sumEl.textContent= "Sum:" +sum;
 if(sum <= 20)
 {
    message ="Do you want to draw new card ";
 } 
 else if(sum === 21){
    message ="You have got blackJack "
    hasBlackJack = true;
    winner.play();
 }
 else {
    message ="You are out of Game ";
    isAlive = false;
    gameover.play();
 }
 
messageEl.textContent=message;
   }
  
    function newCard(){

      if(isAlive ==true && hasBlackJack == false){
      let card =getRandomCard() ;
      sum += card;
      cards.push(card)
      renderGame();
      }
   }
     
    
   