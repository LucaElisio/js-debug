/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// 1- Questo codice stamperà in consolo i numeri da 0 a 4
// 2- Non ci sono errori di sintassi
// 3- La condizione del ciclo deve essere i < 5 altrimenti eseguirà mai il codice nel ciclo

//* ESERCIZIO 1 CORRETTO
for (let i = 0; i < 5; i++) {
    console.log(i);
}



// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// 1- Questa funzione restituisce il valore del parametro se è un numero dispari, altrimenti restituisce il valore del parametro + 5 (attualmente restituisce sempre 5)
// 2- Nella condizione if ci deve essere un operatore relazionale (== oppure ===), in quanto un solo = corrisponde ad assegnamento
// 3- Il return potrebbe essere scritto una sola volta alla fine della funzione, e dentro l'if andare solo ad incrementare il valore della variabile num

//* ESERCIZIO 2 CORRETTO
function addIfEven(num) {
    if (num % 2 === 0) {
        num += 5;
    }
    return num;
}


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
// 1- Questa funzione stamperà in console i numeri da 0 a 4
// 2- All'interno della parentesi tonde del ciclo for al posto delle virgole ci va il punto e virgola
// 3- Non ci sono errori logici

//* ESERCIZIO 3 CORRETTO
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
// 1- Questa funzione restituisce un array con solo i numeri pari dell'array iniziale
// 2- Dopo i++ c'è un punto e virgola che non dovrebbe esserci, dentro la condizione dell'if non c'è operatore relazionale. Dopo la condizione if c'è un punto e virgola.
// 3- Errori logici:
//      1. la condizione dell'if deve confrontare non number (che è un array) ma numbers[i], che corrisponde all'elemento corrente
//      2. dentro il push ci deve essere numbers[i], altrimenti pushiamo l'indice e non l'elemento
//      3. il return va fuori dal ciclo for, altrimenti ci saranno 7 return
//      4. la condizione del for deve essere i < numbers.length oppure i <= numbers.length - 1, altrimenti non legge l'ultimo elemento

//* ESERCIZIO 4 CORRETTO
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i <= numbers.length - 1; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
