'use strict';

let checkBtn = document.querySelector('.check');
let number = document.querySelector('.number');
let message = document.querySelector('.message');
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let scoreEl = document.querySelector('.score');
let bodyEl = document.querySelector('body');
const againBtn = document.querySelector('.again');
let highscoreEl = document.querySelector('.highscore');
let highScore = 0;
let score = 20;

// checkBtn.addEventListener('click', function(){
//     if(Number(guess.value) === Number(number.textContent)){
//         document.querySelector('body').style.backgroundColor = "#60b347";
//     }
// })



checkBtn.addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if (!guess){
        message.textContent = "⛔️ No Number!";
        score--;
        scoreEl.textContent = score;
    } else if (guess === randomNumber){
        message.textContent = "🎉 Correct Number!"
        bodyEl.style.backgroundColor = "#60b347";
        number.style.width = "30rem";
        number.textContent = guess;
        if (score > highScore){
            highScore = score;
            highscoreEl.textContent = score;
        }
    } else if (guess > randomNumber){

        if(score > 1){
            message.textContent = "📈 Too High!"
            score--;
            scoreEl.textContent = score;
        } else {
            message.textContent = "💥 You Lost!";
            bodyEl.style.backgroundColor = "red";
        }

    } else if (guess < randomNumber){
        // When the player loses
        if(score > 1){
            score--;
            scoreEl.textContent = score;
            message.textContent = "📉 Too Low!"

        } else {
            message.textContent = "💥 You Lost!";
            bodyEl.style.backgroundColor = "red";
        }
    }



})

againBtn.addEventListener('click', function(){
    score = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    number.textContent = "?";
    message.textContent = "Start guessing...";
    scoreEl.textContent = score;
    document.querySelector('.guess').value = "";
    bodyEl.style.backgroundColor = "#222";
    number.style.width = "15rem";
})
