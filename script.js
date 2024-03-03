let randomNumber = parseInt(Math.random() *100 +1);
const submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessFilde');
const guessSlot = document.querySelector('.guesses');
const reamining = document.querySelector('.lastResult') ;
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numOfGuesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number")
    }else if(guess<1){
        alert("please enter a number more than 1")
    }else if(guess>100){
        alert("please enter a number less than 100")
    }else{
        prevGuess.push(guess);
        if(numOfGuesses === 11){
            displayGuess(guess)
            displayMessage(`Game Over Ramdom Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Guessed it Right`)
    }else if(guess < randomNumber){
        displayMessage(`Number is too Low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is too High`)
    }
}

function displayMessage(msg){
    lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess} ,`
    numOfGuesses++
    reamining.innerHTML = `${11 - numOfGuesses}`
}

function endGame(){
    userInput.value =''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML =`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() *100 +1);
        prevGuess = [];
        numOfGuesses = 1;
        guessSlot.innerHTML = ''
        reamining.innerHTML = `${11 - numOfGuesses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}



