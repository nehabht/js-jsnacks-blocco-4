/* SNACK 3 
Scrivi una funzione che accetti una stringa come argomento 
e la ritorni girata (es. Ciao -> oaiC) */


function reverse(s){
    return [...s].reverse().join("");
}

console.log(reverse("ciao"))