const container = document.querySelector(".container");
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
//const currencyEl_two = document.getElementById('currency-two');


populateUI();

let ticketPrice = movieSelect.value;

//Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);

}

// function calculate() {
//     const apiURL = 'https://v6.exchangerate-api.com/v6/570e43e0f5bbeb36ff4f12a3/latest/'
//     const currency_one = "USD";
//     const currency_two = currencyEl_two.value;
//     fetch(apiURL+currency_one)
//     .then(function (res) {
//         showLoading()
//         if (res) {
//             res.json()
//             .then(data =>{
//             const rate = data.conversion_rates[currency_two] / data.conversion_rates[currency_one];
//             total.value = (total.value * (rate)).toFixed(2);
//             console.log(total.value);
//             });
            
//         } else {
//             console.log('Network response OK  but HTTP response NO OK');            
//         } 
//     })
//     .catch(function(error) {
//         console.log('There was a problem with your Fetch request:' + error.message);
//     });
// }

// function showLoading() {
//     return rateEL.innerText = 'Loading'
// }

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
    
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

    setMovieData(movieSelect.selectedIndex, movieSelect.value)
}


//Get data from localStorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
        
    }
}


//Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

//Seat click event
container.addEventListener('click', e =>{
    if (
        e.target.classList.contains('seat') && 
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

updateSelectedCount();
