// Variables
const inputValue01 = document.querySelector("#value01");
const currency01 = document.querySelector("#currency01")

const inputValue02 = document.querySelector("#value02");
const currency02 = document.querySelector("#currency02")



fetch(`https://v6.exchangerate-api.com/v6/37efb5e5297e1fee00ee2567/latest/USD`)
    .then(response => {
        // Check if the request was successful
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response as JSON
        return response.json();
    })
    .then(data => {
        // Do something with the data
        console.log(data.conversion_rates);
        for (let chave in data.conversion_rates){
            let newCurrency = document.createElement('option')
            newCurrency.value = chave
            newCurrency.text = chave
            currency01.appendChild(newCurrency)
        }
        for (let chave in data.conversion_rates){
            let newCurrency = document.createElement('option')
            newCurrency.value = chave
            newCurrency.text = chave
            currency02.appendChild(newCurrency)
        }
        
    })
    .catch(error => {
        // Handle errors
        console.error('Fetch error:', error);
    });


function converter(input){
    if (input == 1){
        let valueInput01 = inputValue01.value
        let currencyInput01 = currency01.value
        let currencyInput02 = currency02.value

        fetch(`https://v6.exchangerate-api.com/v6/37efb5e5297e1fee00ee2567/latest/${currencyInput01}`)
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Do something with the data
            console.log(data.conversion_rates);
            inputValue02.value = (valueInput01 * data.conversion_rates[currencyInput02]).toFixed(2)
            
        })
        .catch(error => {
            // Handle errors
            console.error('Fetch error:', error);
        });
        
    }
    else if (input == 2){
        let valueInput02 = inputValue02.value
        let currencyInput02 = currency02.value
        let currencyInput01 = currency01.value

        fetch(`https://v6.exchangerate-api.com/v6/37efb5e5297e1fee00ee2567/latest/${currencyInput02}`)
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Do something with the data
            console.log(data.conversion_rates);
            inputValue01.value = (valueInput02 * data.conversion_rates[currencyInput01]).toFixed(2)
            
        })
        .catch(error => {
            // Handle errors
            console.error('Fetch error:', error);
        });

    }
}

inputValue01.addEventListener("input", function() {
    // Chamar a função e passar parâmetros
    converter(1);
});

inputValue02.addEventListener("input", function() {
    // Chamar a função e passar parâmetros
    converter(2);
});


currency01.addEventListener("input", function() {
    // Chamar a função e passar parâmetros
    converter(1);
});

currency02.addEventListener("input", function() {
    // Chamar a função e passar parâmetros
    converter(1);
});
