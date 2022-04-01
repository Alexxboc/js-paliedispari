/* 
PALINDROMA:
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
*/

// Chiedere all'utente di scrivere una parola

const userWord = prompt(`Type a word`);

function tenet (word) {
    let reversWord = ''
    for(i = word.length -1; i >= 0; i--){
        reversWord += word[i];
    } 
        return reversWord == word 
}

let result = tenet(userWord)
console.log(result)

