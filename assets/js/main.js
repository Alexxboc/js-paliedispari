/* 
PALINDROMA:
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
*/

// Chiedere all'utente di scrivere una parola
// const userWord = prompt(`Type a word`);

// // Creare una funzione per decidere se la parola è palindroma
// function tenet (word) {
//     // Dichiarare una varibile con stringa vuota per la parola letta al contrario
//     let reversWord = ''
//     // Creare un ciclo for con indice di decremento che legga la parola al contrario
//     for(i = word.length -1; i >= 0; i--){
//     // Trasformare gli indici letti al contrario in una parola 
//         reversWord += word[i];
//     } 
//         return reversWord == word 
// }

// // Dichiarare una variabile per il risultato
// let result = tenet(userWord)

// // Stampare in console il risultato
// console.log(result)


/* 
PARI E DISPARI
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


// Dichiaro una variabile per pari/dispari

let even_odd;

// Chiedere all'utente se sceglie pari o dispari
const choice_even_odd = prompt('Digita p per pari o d per dispari')
if (choice_even_odd == 'p') {
    even_odd = 'pari'
  } else {
    even_odd = 'dispari'
  }

// Stampare in console la scelta dell'utente
console.log(`L'utente ha scelto ${even_odd}`);

// Chiedere all'utente di scegliere un numero da 1 a 5
const user_number = Number(prompt('Scegli un numero da 1 a 5'));

// Stampare in console la scelta del numero dell'utente
console.log(`L'utente ha scelto il numero ${user_number}`);

// Generare un numero random per il pc con una funzione
function getRndInteger(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creare una variabile per il numero random del PC
const pc_number = getRndInteger(1,5)

// Stampare in console il numero random per il pc
console.log(`Il computer ha scelto ${pc_number}`);

// Sommare i numeri scelti 
const sum = user_number + pc_number;
console.log(`La somma dei due numeri è ${sum}`);

// Creare una funzione per decidere se il numero è pari o dispari
function isEven (numbersSum){
    if (numbersSum % 2 === 0){
        return true
    } else {
        return false
    }
}

// Creare le condizioni per dichiarare il vincitore
if (isEven(sum) == true && even_odd == 'pari'){
    console.log(`Il numero ${sum} è pari vince l'utente`);
} else if (isEven(sum) == false && even_odd == 'dispari') {
    console.log(`Il numero ${sum} è dispari vince l'utente`)
} else if (isEven(sum) == true && even_odd != 'pari'){
    console.log(`Il numero ${sum} è pari vince il PC`)
} else {
    console.log(`Il numero ${sum} è dispari vince il PC`)
}

