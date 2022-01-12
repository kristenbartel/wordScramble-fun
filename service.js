export{getRandom};

function getRandom () {
    fetch ('https://freebee.fun/cgi-bin/random')
    .then(response => response.json())
    .then(data => {
        let wordList = data.wordList


    })
}

//operate on one property on the object at a time