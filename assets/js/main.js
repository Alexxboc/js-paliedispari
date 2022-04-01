/* 
PALINDROMA:
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
*/

// Chiedere all'utente di scrivere una parola

const userWord = prompt(`Type a word`);

function tenet (userWord) {
    let reversWord;
    for(i = userWord.length - 1; i >= 0; i--){
        reversWord = userWord[i];
        console.log(reversWord);
    }
    
}

// for(i = userWord.length - 1; i >= 0; i--){
//      console.log(userWord[i]);
    
// }