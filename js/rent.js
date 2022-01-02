/* CONTAINERS */
const durationContainer = document.getElementById('duration-container');
const dateContainer = document.getElementById('date-container');
const peopleContainer = document.getElementById('people-container');
const priceContainer = document.getElementById('price-container');
const progressBar = document.getElementById('progress-bar');

/* SET PROGRESS BAR */
let progress;
function setProgressBar(progressNum){ /* receives an int than transforms in a string to change the css variable */
    progress = progressNum + "%";
    progressBar.style.setProperty('--progress', progress);
}

/* DURATION */
let duration;
function validateDuration(){
    duration = document.getElementById('duration').value;

    if(duration != "" && duration > 0){
        duration = document.getElementById('duration').value;;
        dateContainer.classList.remove('not-visible');
        setProgressBar(34);
    } else {
        alert('invalid duration');
    }
}

/* DATE */
let date; 
function validateDate(){
    now = currentDate.getFullYear() + "-" + currentDate.getMonth() + "-" + currentDate.getDate();
    date = document.getElementById('date').value;

    if(date != "" && date >= now){
        date = document.getElementById('date').value;;
        peopleContainer.classList.remove('not-visible');
        setProgressBar(67);
    } else {
        alert('invalid date');
    }
}

/* PEOPLE */
let people;
function validatePeople(){
    people = document.getElementById('people').value;

    if(people != "" && people > 0){
        people = document.getElementById('people').value;;
        setProgressBar(100);

        if(window.confirm("Do you want to continue?")){
            calcPrice(duration, date, people);
        } 
    } else {
        alert('invalid duration');
    }
}

/* CALC PRICE */
let price;
function calcPrice(duration, date, people){
    priceContainer.classList.remove('not-visible');
    durationContainer.classList.add('not-visible');
    dateContainer.classList.add('not-visible');
    peopleContainer.classList.add('not-visible');
    price = 0;

    //the first week is 100 per day; any day pass it is 80 per day
    for (var i = duration; i > 0; i--) {
        if (i <= 7) {
            price += 100;
        }
        if(i > 7){
            price += 80;
        }
    }

    //if less than two people there's no adicional cost
    if(people > 2) {
        price += (people-2) * 50;
    } 

    //ends putting it on the screen
    priceContainer.innerHTML += "&nbsp" + price + ".00";
}