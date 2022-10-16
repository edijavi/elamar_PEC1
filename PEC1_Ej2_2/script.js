const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEL = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
    const apiURL = 'https://v6.exchangerate-api.com/v6/570e43e0f5bbeb36ff4f12a3/latest/'
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value
    fetch(apiURL+currency_one)
    .then(function (res) {
        showLoading()
        if (res) {
            res.json()
            .then(data =>{
            const rate = data.conversion_rates[currency_two] / data.conversion_rates[currency_one];
            rateEL.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
            });
            
        } else {
            console.log('Network response OK  but HTTP response NO OK');            
        } 
    })
    .catch(function(error) {
        console.log('There was a problem with your Fetch request:' + error.message);
    });
}

function showLoading() {
    return rateEL.innerText = 'Loading'
}

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('imput', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});


calculate()