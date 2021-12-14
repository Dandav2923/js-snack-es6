// Scrivere una funzione(e lanciarla : razzo: ) che accetti tre argomenti, un array e due numeri(a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const array = [1, 2, 3, 4, 5, 60, 7, 80, 9, 100, 11, 120, 13, 140, 15, 16, 17, 18, 19, 20];

// FUNCTION

function razzo(array, min, max) {
    let newArray = array.filter((element, index) => {
        return index < max  && index > min
    });

    return newArray
}
let array2 = razzo(array, 1,20);
console.log(array2);