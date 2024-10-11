function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementsById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}