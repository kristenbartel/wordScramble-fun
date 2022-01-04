
//

//for each clicked letterValue, letterValue inputs to userAttempt[] .push()
//       DOM inputContainer.appendChild()
//submitButton clicked, inputAnswerChecked(userAttempt, correctAnswers)
//      if correct DOM accumulatedPoints.appendChild(userAttempt[])
//need accumulated point: for each winningAnswer.push() +1 to accumulatedPoints
//accumulate points, count and return to user

//---------------DOM bindings----------------------------------------------
let startGame = document.getElementById('startPage');
// let letters = document.querySelectorAll('letters');
let letters = document.getElementById('letters');
let lettersContainer = document.getElementById('buttonContainer');
// lettersContainer.appendChild('letters');
let inputContainer = document.getElementById('userAttempt');
let buttonContainer = document.getElementById('buttonContainer');
let submitButton = document.getElementById('submitButton');
let deleteButton = document.getElementById('deleteButton');
let reshuffle = document.getElementById('reshuffle');
let totalPointsContainer = document.getElementById('totalPointsContainer');
let answerBank = document.getElementById('answerBankContainer');
// let answer = winningAnswer.from[NodeList];

// basic logic and pseudo code for buttons
letters.addEventListener ('click', () => {
    inputContainer.appendChild(letters.innerHTML);
})

// submitButton.addEventListener('click', ()=> {
//      inputAnswer(attempt, arr); //activates
//       if (true) {
//           return answerBank.appendChild(winningAnswer);
//       } else 
// });

deleteButton.addEventListener('click', () => {
    alert("Hello! I am an alert box!!");
    // userAttempt.pop();
})
    
reshuffle.addEventListener('click', () => {
})


//create buttons and clickable and append them to input each time




// -------------- basic functions-------------------------------------------
let stockChars = ['w', 'a', 'i', 'h', 'e', 'd', 'n', 'e'];
let correctAnswers = ['wined', 'when','wine','awed','dawn', 'wide', 'widen', 'wean', 'wane'];
let winningAnswer = [];
let accumulatedPoints = 0;
//need this to accumulate for each push

//holds user input
let userAttempt = [];
// let userAttempt1 = ['w','i','n','e','d']; 
// let userAttempt2 = ['w','h','e','n'];
// let falseAnswer = ['w', 'a', 'd', 'e'];


 function inputAnswerCheck (attempt, arr) {
     let joinedAttempt = attempt.join('');
    for (i = 0; i < arr.length; i++) {
        if (arr.includes(joinedAttempt)) {
            winningAnswer.push(joinedAttempt);
            accumulatedPoints++;
            return true;
        } else {
            return false;
        } 
             }
    }

 console.log(inputAnswerCheck(userAttempt1, correctAnswers)); 
 console.log(winningAnswer);
 console.log(accumulatedPoints);
 

// let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// // var random = alpha[Math.floor(Math.random()*alpha.length)];

// function randomAlpha (alpha) {
//      for (let i = 0; i < alpha.length; i++) {
//         alpha[Math.floor(Math.random(6))]
//         console.log();
//      } 
// }
// console.log(randomAlpha(alpha));

// function scramble(arr){
//     let a = string.split(""),
//     n = a.length;
//     for(let i = n - 1; i > 0; i--){
//         let j = Math.floor(Math.random()*(i + 1));
//         let tmp = a[i];
//         a[i] = a[j],
//         a[j] = tmp;
//     }
//     return a.join("");
// }
// console.log(scramble("elias"));
