// function play(){
//     // section 1st
//   const homeScren =document.getElementById('home-scren');
//   homeScren.classList.add('hidden');
// //   section 2nd
//   const playGround = document.getElementById('play-ground');
//   playGround.classList.remove('hidden')
// }

function handlerKeyboardKeyUpEvent(event){
const playerPress =event.key;


const currentAlphabetElement = document.getElementById('random-letter');
const  currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();



if(playerPress === expectedAlphabet){
    console.log('Got a point');
    
    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    console.log(currentScore)

    const newScore = currentScore + 1

    currentScoreElement.innerText = newScore;

    removeBackgroundColorById(expectedAlphabet);
    containurGame()
}
else{
    console.log('Sorry');

    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    console.log(currentLife);
    
    const newLife = currentLife - 1;

    currentLifeElement.innerText = newLife;



    if(newLife === 0){
        gameOver()
        }
}

}



document.addEventListener('keyup',handlerKeyboardKeyUpEvent);


function containurGame(){
    const alphabet =getRandomAlphabet();
    // console.log('Your random alphabet', alphabet);

    //set randomly alphabet
    const currentAlphabetElement = document.getElementById('random-letter');
    currentAlphabetElement.innerText = alphabet ;

    setBackgroundColorById(alphabet)
}


function play(){
    hideElementById('home-scren');
    showElementsById('play-ground');



    hideElementById('final-score');

    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0)

    containurGame();
}

function gameOver(){
    hideElementById('play-ground')
    showElementsById('final-score')

    const lastScore = getTextElementValueById('current-score');
 console.log(lastScore);
 setTextElementValueById('last-score',lastScore);

 const currentAlphabet =getElementTextById('random-letter');
//  console.log(currentAlphabet)
removeBackgroundColorById(currentAlphabet)
}

