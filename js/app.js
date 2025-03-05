// kilometri
const kmIns = document.getElementById('km')

// età
const ageIns = document.getElementById('age')

// costo al km
const costKm = 0.21

// sconto minorenni
const under18Discount = 20

// sconto over65
const over65Discount = 40

// bottone per inviare i dati
const submit = document.getElementById('submit')

// form
const form = document.querySelector('form')

// div con paragrafo con risultato
const divResult = document.querySelector('div')

// paragrafo per risultato
const result = document.getElementById('recap')

// previene che la pagina si ricarichi e che i dati vengano persi
form.addEventListener('submit', (event) => {
    event.preventDefault()
})

// invia i dati al click del bottone
submit.addEventListener('click', () => {

    // prendo il valore di km inserito
    const km = parseInt(kmIns.value)
    console.log(km)

    // prendo l'età inserita
    const age = parseInt(ageIns.value)
    console.log(age)

    // controllo che siano effettivamente numeri
    if (isNaN(km)) {
        return ("per favore, inserisci un numero di km valido")
    };
    if (isNaN(age)) {
        return ("per favore, inserisci un età valida")
    };

    // inserisco i dati inseriti nel recap
    const firstPar = document.createElement("p")
    firstPar.innerText ='i numeri di kilometri inseriti sono:' + km
    result.appendChild(firstPar)

    const secondPar = document.createElement("p")
    secondPar.innerText ="l'età inserita è: " + age
    result.appendChild(secondPar)

    // inserisco il risultato nel recap
    if (age < 18) {
        let totalCost = (km * costKm) / 100 * (100 - under18Discount)
        result.append(" il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
    }
    else if (age > 65) {
        let totalCost = (km * costKm) / 100 * (100 - over65Discount)
        result.append(" il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
    }
    else {
        let totalCost = (km * costKm)
        result.append(" il costo del tuo biglietto è " + totalCost.toFixed(2) + " €")
    };

    // rendo visibile il div
    divResult.classList.remove('invisible')

})




