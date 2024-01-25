 let boxes = document.querySelectorAll(".box"); 
 let resetGame = document.querySelector("#resetGame"); 
 let newGame = document.querySelector(".newGame"); 
 let winner = document.querySelector("#winner"); 
 let msgContainer = document.querySelector(".msgContainer"); 
 let msg = document.querySelector("#msg")

 let turnO = true; // Player O - Player X(turns is false)

 let winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
 ]; 

// Loops

boxes.forEach(box => {
    box.addEventListener("click", () => {
       if(turnO){
        box.innerText = "O"; 
        turnO = false; 
       } else {
        box.innerText = "X"
        turnO = true; 
       }
       box.disabled = true; 
       checkWinner(); 
    }); 
}); 


// Functions

const reset = () => {
  turnO = true; 
  enableBoxes(); 
  msgContainer.classList.add("hide"); 
}; 

const disableBoxes = () => {
  for (let  box of boxes) {
    box.disabled = true; 
  }
}

const enableBoxes = () => {
  for (let  box of boxes) {
    box.disabled = false;
    box.innerText = "";  
  }
}


const showWinner = (winner) => {
  msg.innerText = `Congratuations, Winner is ${winner}`; 
  msgContainer.classList.remove("hide"); 
  newGame.style.display = "block"; 
  disableBoxes();
}

const checkWinner = () => {
  for (let patterns of winningPatterns ) {

      let pos1Val = boxes[patterns[0]].innerText; 
      let pos1Va2 = boxes[patterns[1]].innerText; 
      let pos1Va3 = boxes[patterns[2]].innerText;

      if (pos1Val != "" && pos1Va2 != "" && pos1Va3 != "") {
        if (pos1Val === pos1Va2 && pos1Va2 === pos1Va3) {
         console.log("winner", pos1Val);
        showWinner(pos1Val);   
        }
      }
  }
}; 

newGame.addEventListener("click", reset); 
resetGame.addEventListener("click", reset); 



