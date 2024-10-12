// function play(){
//     // section 1st
//   const homeScren =document.getElementById('home-scren');
//   homeScren.classList.add('hidden');
// //   section 2nd
//   const playGround = document.getElementById('play-ground');
//   playGround.classList.remove('hidden')
// }


function containurGame(){
    const alphabet =getRandomAlphabet();
    console.log(alphabet);

    //set randomly alphabet
    const currentAlphabetElement = document.getElementById('random-letter');
    currentAlphabetElement.innerText = alphabet ;

    setBackgroundColor(alphabet)
}


function play(){
    hideElementById('home-scren');
    showElementsById('play-ground');
    containurGame();
}
