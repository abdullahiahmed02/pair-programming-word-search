const wordSearch = (letters, word) => { 
    const joinArr = ls => ls.join('')
    const horizontalJoin = letters.map(joinArr)
    const transposeLetters = [];

    for(let i = 0; i < letters[0].length; i++) {
        transposeLetters.push([]);
        for(let j = 0; j < letters.length; j++) {
            transposeLetters[i].push(letters[j][i]);
        }
    }
    const verticalJoin = transposeLetters.map(joinArr);
        
    console.log(verticalJoin);
    console.log(horizontalJoin)
    
    // console.log(horizontalJoin);
    for (l of verticalJoin) {

        if (l.includes(word)) return true;
    }
   for (l of horizontalJoin) {

        if (l.includes(word)) return true;
    }
    return false;
} 

module.exports = wordSearch
