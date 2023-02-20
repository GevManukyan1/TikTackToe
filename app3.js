let game = document.getElementById("game");
let allblock = document.getElementsByClassName("block");
let win = document.querySelector(".winDiv")
let restart = document.querySelector(".restDiv")
let arr = []
window.onload = function () {
    for (let i = 0; i < 9; i++) {
        game.innerHTML += `<div class="block"></div>`
    }
    restart.addEventListener("click",function(){
        win.style.display = "none"

    })
    let turn = true ;
    let arr = []
    game.addEventListener("click", (event) => {
        arr.push(event.target)
        if (event.target.className == "block") {
            if (turn === true) {
                event.target.innerHTML = "X";
                event.target.style.pointerEvents = "none"
            } else  {
                event.target.innerHTML = "O";
                event.target.style.pointerEvents = "none"
            }
            turn = !turn
            checkWinner();
        }
    })
    restart.addEventListener("click",function(e){
        win.style.display = "none" ;
        restart.style.display = "none" ;
        win.innerHTML = " " ;
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            element.innerText = "";
            element.style.pointerEvents = "auto"

        }
        arr = []
    })
}

function checkWinner() {

    if (allblock[0].innerHTML == "X" && 
        allblock[1].innerHTML == "X" && 
        allblock[2].innerHTML == "X") { 
            win.style.display = "flex" ; 
            
            setTimeout(() => {
                win.innerText = `Winner is X `;
            }, 1000);
            setTimeout(() => {
                restart.style.display = `block`;
            }, 2000);
        }
    if (allblock[3].innerHTML == "X" &&
        allblock[4].innerHTML == "X" &&
        allblock[5].innerHTML == "X") {
            win.style.display = "flex" ; 
            
            setTimeout(() => {
                win.innerText = "Winner is X";
            }, 1000); 
            setTimeout(() => {
                restart.style.display = `block`;
            }, 2000);
            }
    if (allblock[6].innerHTML == "X" &&
         allblock[7].innerHTML == "X" &&
          allblock[8].innerHTML == "X") {
            win.style.display = "flex" ; 
            
            setTimeout(() => {
                win.innerText = "Winner is X";
            }, 1000);
            setTimeout(() => {
                restart.style.display = `block`;
            }, 2000);
             }
    if (allblock[0].innerHTML == "X" &&
        allblock[3].innerHTML == "X" &&
        allblock[6].innerHTML == "X") { 
            win.style.display = "flex" ; 
            
            setTimeout(() => {
                win.innerText = "Winner is X";
            }, 1000);
            setTimeout(() => {
                restart.style.display = `block`;
            }, 2000);
    }
    if (allblock[1].innerHTML == "X" &&
        allblock[4].innerHTML == "X" &&
        allblock[7].innerHTML == "X") { 
            win.style.display = "flex" ; 
            
            setTimeout(() => {
                win.innerText = "Winner is X";
            }, 1000);
            setTimeout(() => {
                restart.style.display = `block`;
            }, 2000);
    }
    if (allblock[2].innerHTML == "X" &&
        allblock[5].innerHTML == "X" &&
        allblock[8].innerHTML == "X") { 
            win.style.display = "flex" ; 
            
            setTimeout(() => {
                win.innerText = "Winner is X";
            }, 1000);
            setTimeout(() => {
                restart.style.display = `block`;
            }, 2000);
    }
    if (allblock[0].innerHTML == "X" &&
        allblock[4].innerHTML == "X" &&
        allblock[8].innerHTML == "X") { 
            win.style.display = "flex" ; 
            
            setTimeout(() => {
                win.innerText = "Winner is X";
            }, 1000);
            setTimeout(() => {
                restart.style.display = `block`;
            }, 2000);
    }
    if (allblock[2].innerHTML == "X" &&
        allblock[4].innerHTML == "X" &&
        allblock[6].innerHTML == "X") { 
            win.style.display = "flex" ; 
            
            setTimeout(() => {
                win.innerText = "Winner is X";
            }, 1000);
            setTimeout(() => {
                restart.style.display = `block`;
            }, 2000);
    }

    if (allblock[0].innerHTML == "O" &&
        allblock[1].innerHTML == "O" &&
        allblock[2].innerHTML == "O") { 
            win.style.display = "flex" ; 
            
            setTimeout(() => {
                win.innerText = "Winner is O";
            }, 1000);
            setTimeout(() => {
                restart.style.display = `block`;
            }, 2000);
    }
    if (allblock[3].innerHTML == "O" &&
        allblock[4].innerHTML == "O" &&
        allblock[5].innerHTML == "O") { 
            win.style.display = "flex" ; 
            
            setTimeout(() => {
                win.innerText = "Winner is O ";
            }, 1000);
            setTimeout(() => {
                restart.style.display = `block`;
            }, 2000);
    }
    if (allblock[6].innerHTML == "O" &&
        allblock[7].innerHTML == "O" &&
        allblock[8].innerHTML == "O") { 
            win.style.display = "flex" ; 
            
            setTimeout(() => {
                win.innerText = "Winner is O";
            }, 1000);
            setTimeout(() => {
                restart.style.display = `block`;
            }, 2000);
    }
    if (allblock[0].innerHTML == "O" &&
        allblock[3].innerHTML == "O" &&
        allblock[6].innerHTML == "O") { 
            win.style.display = "flex" ; 
            
            setTimeout(() => {
                win.innerText = "Winner is O";
            }, 1000); 
            setTimeout(() => {
                restart.style.display = `block`;
            }, 2000);
    }
    if (allblock[1].innerHTML == "O" &&
        allblock[4].innerHTML == "O" &&
        allblock[7].innerHTML == "O") { 
            win.style.display = "flex" ; 
            
            setTimeout(() => {
                win.innerText = "Winner is O";
            }, 1000);
            setTimeout(() => {
                restart.style.display = `block`;
            }, 2000);
    }
    if (allblock[2].innerHTML == "O" &&
        allblock[5].innerHTML == "O" &&
        allblock[8].innerHTML == "O") { 
            win.style.display = "flex" ; 
            
            setTimeout(() => {
                win.innerText = "Winner is O";
            }, 1000);
            setTimeout(() => {
                restart.style.display = `block`;
            }, 2000);
    }
    if (allblock[0].innerHTML == "O" &&
        allblock[4].innerHTML == "O" &&
        allblock[8].innerHTML == "O") { 
            win.style.display = "flex" ; 
            
            setTimeout(() => {
                win.innerText = "Winner is O";
            }, 1000);
            setTimeout(() => {
                restart.style.display = `block`;
            }, 2000); 
    }
    if (allblock[2].innerHTML == "O" &&
         allblock[4].innerHTML == "O" &&
         allblock[6].innerHTML == "O") { 
            win.style.display = "flex" ; 
            
            setTimeout(() => {
                win.innerText = "Winner is O";
            }, 1000);
            setTimeout(() => {
                restart.style.display = `block`;
            }, 2000);
    }else if(arr.length === 9){
        win.style.display = "flex" ; 
        setTimeout(() => {
            win.innerText = "You are equal";
        }, 1000);
        setTimeout(() => {
            restart.style.display = `block`;
        }, 2000);
    }

}