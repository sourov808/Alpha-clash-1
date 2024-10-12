function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementsById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function setBackgroundColor(elementId){
       const element = document.getElementById(elementId);
       element.classList.add('bg-orange-400');
}

function getRandomAlphabet(){
    const alphabetStrings = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetStrings.split('');
    

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    

    const alphabet = alphabets[index]
    console.log(index,alphabet);
    return alphabet;
}