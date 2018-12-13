
var scorePlayerOne = 0;
var scorePlayerTwo = 0;
var currentScorePlayerOne = 0;
var currentScorePlayerTwo = 0;
var random = 0;
var giro = false;

document.getElementsByClassName("btn-roll")[0].addEventListener("click", roll);
document.getElementsByClassName("btn-hold")[0].addEventListener("click", hold);
document.getElementsByClassName("btn-new")[0].addEventListener("click", newGame);


function newGame(){
    location.reload();
}



function getRandomInt() {
    return Math.floor(Math.random() * (7 - 1)) + 1;
  }

function changeActive(){
    currentScorePlayerOne = 0;
    currentScorePlayerTwo = 0;
    document.getElementsByClassName("player-current-score")[0].innerHTML = currentScorePlayerOne;
    document.getElementsByClassName("player-current-score")[1].innerHTML = currentScorePlayerTwo;
    if(document.getElementsByClassName("player-0-panel")[0].classList.contains("active")){
        document.getElementsByClassName("player-0-panel")[0].classList.remove("active");
        document.getElementsByClassName("player-1-panel")[0].classList.add("active");
    }else{
        document.getElementsByClassName("player-1-panel")[0].classList.remove("active");
        document.getElementsByClassName("player-0-panel")[0].classList.add("active");
    }
}

function verificarGanador(){
    if(scorePlayerOne >= 100){
        alert("Felicidades Jugador Uno, ¡Ganaste!")
        document.getElementsByClassName("btn-roll")[0].disabled = true;
        document.getElementsByClassName("btn-hold")[0].disabled = true;
    }else if (scorePlayerTwo >= 100){
        alert("Felicidades Jugador Dos, ¡Ganaste!")
        document.getElementsByClassName("btn-roll")[0].disabled = true;
        document.getElementsByClassName("btn-hold")[0].disabled = true;
    }
}

function hold(){
    if(giro){
        if(document.getElementsByClassName("player-0-panel")[0].classList.contains("active")){
            scorePlayerOne += currentScorePlayerOne;
            document.getElementsByClassName("player-score")[0].innerHTML = scorePlayerOne;
            changeActive();
        }else{
            scorePlayerTwo += currentScorePlayerTwo;
            document.getElementsByClassName("player-score")[1].innerHTML = scorePlayerTwo;           
            changeActive();
        }
        giro = false;
    }
    verificarGanador()
}

function roll(){
    var prueba = 0
    var objetivo = 3000;   
    
    var interval = setInterval(changeImage, 1000);
    function changeImage(){
        document.getElementsByClassName("dice")[0].style.boxShadow = "0px 10px 60px red";
        random = getRandomInt();
        var nameImage = "dice-" + random + ".png"
        document.getElementsByClassName("dice")[0].src = nameImage; 
        prueba += 1000;
        document.getElementsByClassName("btn-new")[0].disabled = true;
        document.getElementsByClassName("btn-roll")[0].disabled = true;
        document.getElementsByClassName("btn-hold")[0].disabled = true;
        if(prueba > objetivo){
            document.getElementsByClassName("dice")[0].style.boxShadow = "0px 10px 60px green";
            document.getElementsByClassName("btn-new")[0].disabled = false;
            document.getElementsByClassName("btn-roll")[0].disabled = false;
            document.getElementsByClassName("btn-hold")[0].disabled = false;
            if(document.getElementsByClassName("player-0-panel")[0].classList.contains("active")){
                if(random != 1){
                    giro = true;
                    currentScorePlayerOne += random;
                    document.getElementsByClassName("player-current-score")[0].innerHTML = currentScorePlayerOne;
                }else{
                    giro = false;
                    currentScorePlayerOne = 0;
                    changeActive();
                }
            }else{
                if(random != 1){
                    giro = true;
                    currentScorePlayerTwo += random;
                    document.getElementsByClassName("player-current-score")[1].innerHTML = currentScorePlayerTwo;
                }else{
                    currentScorePlayerTwo = 0;
                    changeActive();
                    giro = false;
                }
            }
            clearInterval(interval); 
        }
    }

    
}
