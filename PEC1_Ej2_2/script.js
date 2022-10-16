const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEL = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value
    fetch(`https://v6.exchangerate-api.com/v6/570e43e0f5bbeb36ff4f12a3/latest/${currency_one}`)
    .then(res => res.json())
    .then(data =>{
        //console.log(data);
        const rate = data.conversion_rates[currency_two] / data.conversion_rates[currency_one];
        rateEL.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
    })

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