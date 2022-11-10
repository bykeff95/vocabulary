let testArea = document.getElementById("testArea");
let counter = document.getElementById("counter");
let wordLabel = document.getElementById("wordLabel");
let wordInput = document.getElementById("wordInput");
let verifyButton = document.getElementById("verifyButton");
verifyButton.addEventListener("click", () => {
    verify();
});

let disordered = shuffle(vocabulary);
console.log(disordered);

let index = 0;
wordLabel.innerText = vocabulary[index]['english'];
counter.innerText = `Question ${index+1}/${disordered.length}`;

let errors = 0

function nextWord(){
    wordLabel.innerText = vocabulary[index]['english'];
    wordInput.value = '';
    counter.innerText = `Question ${index+1}/${disordered.length}`;
}

function verify(){
    console.log('translation:', disordered[index]['spanish']);
    if(wordInput.value == disordered[index]['spanish']) {
        if (index < disordered.length-1) {
            index++;
            nextWord();
        } else {
            console.log('Entranamiento finalizado');
            counter.innerText = 'Entranamiento finalizado';
            testArea.remove();
            let result = document.getElementById('result');
            result.innerText = `Errores cometidos: ${errors}`;
        }
    } else{
        errors++;
    }
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if(keyName == "Enter"){
        verify()
    }
});

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}