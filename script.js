'use strict';
// console.log(document.querySelector('.message').textContent);


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;

document.querySelector('.check').addEventListener(
  'click', function (){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
  
    if(!guess){
      document.querySelector('.message').textContent = " You didn't enter the Number here ! 😒";
    }
    // else if (guess !== secretNumber){
    //   document.querySelector('.message').textContent = " Wrong Number lol 😝";

    // }
    else if (guess === secretNumber){
      document.querySelector('.message').textContent = " Congratulation ! 😻";
      document.querySelector('.score').textContent = score;

      document.querySelector('body').style.
      backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber ;
    }
    else if (guess > secretNumber){

      if( score > 0){
      document.querySelector('.message').textContent = " Too high 📈";
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.
      backgroundColor = '#d5d50b';
    } else{
      document.querySelector('.message').textContent = " You lost the game 💥";
      document.querySelector('body').style.
      backgroundColor = '#d72a2a';
    }
    }
    else if (guess < secretNumber){
      if( score > 0){
        document.querySelector('.message').textContent = " Too low 📉";
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.
        backgroundColor = '#d5d50b';
      } else{
        document.querySelector('.message').textContent = " You lost the game 💥";
        document.querySelector('body').style.
        backgroundColor = '#d72a2a';
      }
    }
  }
)

document.querySelector('.again').addEventListener(
  'click', function (){
    let score = 20;
    const secretNumber = Math.trunc(Math.random()*20) + 1;

    document.querySelector('.message').textContent = 'Start guessing number';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';




  }

)