"use strict"

/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

/*const biciclette = [
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
console.log(biciLeggera);*/

/*Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const squadre = [
    {
        nome : "Inter",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Milan",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Juve",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Roma",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Lazio",
        puntiFatti : 0,
        falliSubiti : 0,
    },
];

const punti = [];
const falli = [];
const squadreEFalli = [];

function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < squadre.length; i++) {
    const numPunti = generaNumeroRandom(1, 10);
    punti.push(numPunti); 
    squadre[i].puntiFatti = numPunti;
}
console.log(punti);

for (let i = 0; i < squadre.length; i++) {
    const numFalli = generaNumeroRandom(1, 10);
    falli.push(numFalli); 
    squadre[i].falli = numFalli;
}
console.log(falli);

for (let i = 0; i < squadre.length; i++) {
    squadreEFalli.push({
        nome: squadre[i].nome,
        falliSubiti: squadre[i].falli
    });
}
console.log(squadreEFalli)

