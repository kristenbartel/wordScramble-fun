import{getRandom} from './service.js'
//for each clicked letterValue, letterValue inputs to userAttempt[] .push()
//       DOM inputContainer.appendChild()
//submitButton clicked, inputAnswerChecked(userAttempt, correctAnswers)
//      if correct DOM accumulatedPoints.appendChild(userAttempt[])
//need accumulated point: for each winningAnswer.push() +1 to accumulatedPoints
//accumulate points, count and return to user


//---------------DOM bindings----------------------------------------------
//loop over result.letters- for each item in array create an element and add the value of the array to it's innerHTML
let startGame = document.getElementById('startPage');
let letterW = document.getElementById('1');

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

//forEach letter in the dataset populate the DOM element-- to avoid hard coding

//----------letters--------
letterW.addEventListener ('click', () => {
    inputContainer.innerHTML += 'w';
})
letterA.addEventListener ('click', () => {
    inputContainer.innerHTML += 'a';
})
letterI.addEventListener ('click', () => {
    inputContainer.innerHTML += 'i';
})
letterH.addEventListener ('click', () => {
    inputContainer.innerHTML += 'h';
})
letterE.addEventListener ('click', () => {
   inputContainer.innerHTML += 'e';
})
letterD.addEventListener ('click', () => {
    inputContainer.innerHTML += 'd';
})
letterN.addEventListener ('click', () => {
    inputContainer.innerHTML += 'n';
})


// --------------fetch promise--------------



const logData = (result) => {
    console.log(result);
    return result;
}

let extractWordList = (result) => {
    console.log(result.wordlist);
    return result.wordlist;
}

let extractLetters = (result) => {
    console.log(result.letters);
    return result.letters;
}


const log = async () => {
    try {
        fetch("https://freebee.fun/cgi-bin/random")
.then(response => response.json())
.then(logData)
.then(extractWordList)
.then(extractLetters)
//  .then(correctAnswers)
//  .then(answerCheck)
    }
}

fetch("https://freebee.fun/cgi-bin/random")
.then(response => response.json())
.then(logData)
.then(extractWordList)
.then(extractLetters)
//  .then(correctAnswers)
//  .then(answerCheck)

// const correctAnswers = (result) => {
//     console.log(result.wordlist);
//     return result.wordlist};


let accumulatedPoints = 0;




//use extractWordList.map()

submitButton.addEventListener('click', correctAnswers => {
    
    if (extractWordList.includes(inputContainer.innerHTML)) {
         let winningAttempt = '';
         winningAttempt += inputContainer.innerHTML;
         answerBank.innerHTML += winningAttempt + ', ';
         inputContainer.innerHTML = '';
         accumulatedPoints++;
         totalPointsContainer.innerHTML = accumulatedPoints;
        //  alert('nice!');
         return true;
     } else {
        //  alert('word not found, please try again');
         inputContainer.innerHTML = '';
         return false;
     } 
 })
//  const answerCheck = (correctAnswers) => {
    
//         if (correctAnswers.includes(inputContainer.innerHTML)) {
//              let winningAttempt = '';
//              winningAttempt += inputContainer.innerHTML;
//              answerBank.innerHTML += winningAttempt + ', ';
//              inputContainer.innerHTML = '';
//              accumulatedPoints++;
//              totalPointsContainer.innerHTML = accumulatedPoints;
//             //  alert('nice!');
//              return true;
//          } else {
//             //  alert('word not found, please try again');
//              inputContainer.innerHTML = '';
//              return false;
//          } 
//      }


    
// -------------delete button---------------
deleteButton.addEventListener('click', () => {
    let input  = String(inputContainer.innerText);
    let newString = input.slice(0, -1);
    inputContainer.innerHTML = newString;
}) 


reshuffle.addEventListener('click', () => {
    alert('should reshuffle the letters <p> elements')
})
