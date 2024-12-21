let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".Reset");
let msg=document.querySelector("#msg");

let winner1=0;

const showWinner=(winner)=>{

msg.innerText= `Congratulations,winner is ${winner}`;
msg.style.display="block";


}
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [2,4,6],
    [6,7,8],

];

let turn0=true;





const clickSound = new Audio('move.mp3');
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") { 
            clickSound.currentTime = 0; 
            clickSound.play(); 
            if (turn0) {
                box.innerText = "0"; 
                turn0 = false;
            } else {
                box.innerText = "X"; 
                turn0 = true;
            }
            checkwinner();
            
        }
    });
});


resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = ""; // Clear all boxes
        box.disabled=false;
        msg.style.display="none";
        box.style.backgroundColor="bisque";
    });
    turn0 = true;
    winner1=0; // Reset the turn to "X"
});


const clickSound2 = new Audio('gameover.mp3');
const checkwinner =()=>{
    for(pattern of winPatterns)
    {
        console.log(boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );

         let pos1Val=boxes[pattern[0]].innerText;
         let pos2Val=boxes[pattern[1]].innerText;
         let pos3Val=boxes[pattern[2]].innerText;

         if(pos1Val!="" & pos2Val!="" &pos3Val!="" )
         {
            if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
                winner1=1;
               console.log("winner",pos1Val);
               pattern.forEach((index) => {
                boxes[index].style.backgroundColor = "rgb(109, 232, 91)";
            });
               showWinner(pos1Val);
               clickSound2.currentTime = 0; 
               clickSound2.play(); 
               boxes.forEach(box => {
                box.disabled = true;

                
    
            });
            }


         }
          
         const allFilled = Array.from(boxes).every((box) => box.innerText !== "");
         if (winner1 === 0 && allFilled) {
             console.log("Match Tie");
             showWinner();
             clickSound2.currentTime = 0; 
               clickSound2.play(); 
             msg.innerText = "Match is Tie";
             msg.style.display = "block";

         }
}
};


