// -------------- basic functions-------------------------------------------
let stockChars = ['w', 'a', 'i', 'h', 'e', 'd', 'n'];
// let correctAnswers = ['wined', 'when','wine','awed','dawn', 'wide', 'widen', 'wean', 'wane'];
// let winningAnswer = [];
//need this to accumulate for each push
// let accumulatedPoints = 0;
// holds user input-- need to create an array from inputContainer contents
// let userAttempt = [inputContainer];
// some tests:
    // let userAttempt1 = ['w','i','n','e','d']; 
    // let userAttempt2 = ['w','h','e','n'];
    // let falseAnswer = ['w', 'a', 'd', 'e'];


 function inputAnswerCheck (attempt, arr) {
    //  let joinedAttempt = attempt.join('');
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
