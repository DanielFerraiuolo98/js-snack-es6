"use strict"

/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

const biciclette = [
    {
        nome : "BMX",
        peso : 15,
    },
    {
        nome : "Mountain bike",
        peso : 20,
    },
    {
        nome : "Olmo",
        peso : 18,
    },
    {
        nome : "Bianchi",
        peso : 25,
    },
];


let biciLeggera = biciclette[0];
for(let i = 0; i < biciclette.length; i++){
    if(biciLeggera > biciclette[i]){
        biciLeggera = biciclette[i];
    }
}
console.log(biciLeggera);