'use strict';

let score = 20;
let highscore = 0;
const number = Math.trunc(Math.random()*20) + 1;

document.querySelector('.check').addEventListener('click', function(){
     const guess = Number(document.querySelector('.guess').value);
        console.log(guess);

        if(!guess){
            document.querySelector('.message').textContent = ' 😟 Please Enter a valid number (between 1 and 20) ! ';
   
        }else if(guess === number){ //when the guess is correct
            document.querySelector('.message').textContent = '🥳 CORRECT NUMBER!!! ';
            document.querySelector('.number').textContent = number;

            // css:
            document.querySelector('body').style.backgroundColor = '#1C6758';
            document.querySelector('h1').style.color = '#FFF5E4';
            document.querySelector('.right').style.backgroundColor = '#1C6758';

                if(score > highscore){
                    highscore = score;
                    document.querySelector('.highscore').textContent = highscore;

                }


        }else if(guess > number){
            if(score > 1){
                document.querySelector('.message').textContent = 'Too large of a number ';
                score = score - 1;
                document.querySelector('.score').textContent = score;
            }
               
            }else if (guess < number){
                document.querySelector('.message').textContent = 'Too small of a number '
                score = score - 1;
                document.querySelector('.score').textContent = score;
            }     

});


document.querySelector('.again').addEventListener
('click', function(){
    location.reload();
    document.querySelector('.guess').value = '';
});

