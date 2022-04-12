/* SNACK 4
Scrivi una funzione che fonda due array 
(aventi lo stesso numero di elementi) prendendo alternativamente 
gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

const alfabeto = ['a','b','c']
const numeri = [1,2,3]


function fusione(x,y){
    return [...x, ...y]
}

// const fusione1 = [...alfabeto, ...numeri]
// console.log(fusione1)

console.log(fusione(alfabeto,numeri))