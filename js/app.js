
const kmIns= document.getElementById('km')
console.log(kmIns)

const ageIns= document.getElementById('age')
console.log(ageIns)

const costKm = 0.21

const under18Discount= 20

const over65Discount= 40

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

    if (age < 18 ){
        let totalCost = (km * costKm) / 100 * (100 - under18Discount)
        console.log(" il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
    }
    else if ( age > 65 ){
        let totalCost = (km * costKm) / 100 * (100 - over65Discount)
        console.log(" il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
    }
    else{
        let totalCost = (km * costKm)
        console.log(" il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
    };

})




