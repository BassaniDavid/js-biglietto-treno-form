
const kmIns= document.getElementById('km')
console.log(kmIns)

const ageIns= document.getElementById('age')
console.log(ageIns)

const costKm = 0.21

const submit= document.getElementById('submit')
console.log(submit)

const form= document.querySelector('form')
console.log(form)

form.addEventListener('submit', (event) =>{
    event.preventDefault()
})

submit.addEventListener('click', () =>{
    // prendo il valore di km inserito
    const km= parseInt(kmIns.value)
    console.log(km)

    // prendo l'età inserita
    const age=parseInt(ageIns.value)
    console.log(age)

    // controllo che siano effettivamente numeri
    if (isNaN(km)){
        return("per favore, inserisci un numero di km valido")
    };
    if (isNaN(age)){
        return("per favore, inserisci un età valida")
    };


})




// let nameSurname = prompt("per favore, inserisci il nome e cognome");

// if (nameSurname == null){
//     alert("per favore, inserire un nome e cognome")
// };

// let totalKm = parseFloat(prompt("per favore, inserisci il numero di km"));


// let age = parseInt(prompt("per favore, inserisci l'età"));



// if (age < 18 ){
//     let totalCost = (totalKm * costKm) / 100 * 80
//     console.log( nameSurname + " il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
//     alert( nameSurname +  " il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
// }
// else if ( age > 65 ){
//     let totalCost = (totalKm * costKm) / 100 * 60
//     console.log( nameSurname + " il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
//     alert( nameSurname + " il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
// }
// else{
//     let totalCost = (totalKm * costKm)
//     console.log( nameSurname + " il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
//     alert( nameSurname + " il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
// };


// Intl.NumberFormat