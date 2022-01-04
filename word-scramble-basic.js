//

//for each clicked letterValue, letterValue inputs to userAttempt[] .push()
//       DOM inputContainer.appendChild()
//submitButton clicked, inputAnswerChecked(userAttempt, correctAnswers)
//      if correct DOM accumulatedPoints.appendChild(userAttempt[])
//need accumulated point: for each winningAnswer.push() +1 to accumulatedPoints
//accumulate points, count and return to user

//---------------DOM bindings----------------------------------------------
let startGame = document.getElementById('startPage');
let letterW = document.getElementById('w');
let letterA = document.getElementById('a');
let letterI = document.getElementById('i');
let letterH = document.getElementById('h');
let letterD = document.getElementById('d');
let letterN = document.getElementById('n');
let letterE = document.getElementById('e');
let lettersContainer = document.getElementById('buttonContainer');
let inputContainer = document.getElementById('userAttempt');
let buttonContainer = document.getElementById('buttonContainer');
let submitButton = document.getElementById('submitButton');
let deleteButton = document.getElementById('deleteButton');
let reshuffle = document.getElementById('reshuffle');
let totalPointsContainer = document.getElementById('totalPointsContainer');
let answerBank = document.getElementById('answerBankContainer');

//----------basic logic and pseudo code for letters--------
letterW.addEventListener ('click', () => {
    let inputW = document.createElement('w');
    inputW.textContent = 'w'
    inputContainer.appendChild(inputW);
})
letterA.addEventListener ('click', () => {
    let inputA = document.createElement('a');
    inputA.textContent = 'a';
    inputContainer.appendChild(inputA);
})
letterI.addEventListener ('click', () => {
    let inputI = document.createElement('i');
    inputI.textContent = 'i'
    inputContainer.appendChild(inputI);
})
letterH.addEventListener ('click', () => {
    // alert('these work');
    let inputH = document.createElement('h');
    inputH.textContent = 'h'
    inputContainer.appendChild(inputH);
})
letterE.addEventListener ('click', () => {
    // alert('these work');
    let inputE = document.createElement('e');
    inputE.textContent = 'e'
    inputContainer.appendChild(inputE);
})
letterD.addEventListener ('click', () => {
    let inputD = document.createElement('d');
    inputD.textContent = 'd';
    inputContainer.appendChild(inputD);
})
letterN.addEventListener ('click', () => {
    let inputN = document.createElement('n');
    inputN.textContent = 'n';
    inputContainer.appendChild(inputN);
})
// ------------basic login and pseudo code for buttons--------
submitButton.addEventListener('click', ()=> {
    
    //takes elements and passes them to inputAnswerCheck funct, as an array or a string
        // what data type is in the inputContainer-- just a html element. If so, how to create a data type from this?
    alert('this button works')
     inputAnswerCheck (attempt, arr); //activates
      if (true) {
          return answerBank.appendChild(winningAnswer);
      }
});

deleteButton.addEventListener('click', () => {
    alert("Hello! I am an alert box!!");
    // userAttempt.pop();
})
    
reshuffle.addEventListener('click', () => {
    alert('this works')
})


//create buttons and clickable and append them to input each time




// -------------- basic functions-------------------------------------------
let stockChars = ['w', 'a', 'i', 'h', 'e', 'd', 'n'];
let correctAnswers = ['wined', 'when','wine','awed','dawn', 'wide', 'widen', 'wean', 'wane'];
let winningAnswer = [];
//need this to accumulate for each push
let accumulatedPoints = 0;
// holds user input-- need to create an array from inputContainer contents
// let userAttempt = [inputContainer];
// some tests:
let userAttempt1 = ['w','i','n','e','d']; 
let userAttempt2 = ['w','h','e','n'];
let falseAnswer = ['w', 'a', 'd', 'e'];


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
