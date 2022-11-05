

function isItAnagramm(firstSentence, secondSentence) {
    let firstSentenceNoSpaces = firstSentence.replace(' ', '').toUpperCase();
    let secondSentenceNoSpaces = secondSentence.replace(' ', '').toUpperCase();
    const firstSentenceLetters = firstSentenceNoSpaces.split('');
    const secondSentenceLetters = secondSentenceNoSpaces.split('')
    let isAnagramm = true;
    if (firstSentenceLetters.length != secondSentenceLetters.length) {
        isAnagramm = false;
    } else {
        firstSentenceLetters.forEach(
            (letter) => {
                if (
                    firstSentenceLetters.filter(x => x === letter).length != secondSentenceLetters.filter(x => x === letter).length
                ) {
                    isAnagramm = false;
                    
                }
                
            }
        )
    }
    return isAnagramm;

}

console.log(isItAnagramm('Astronomer', 'Moon starer'));
