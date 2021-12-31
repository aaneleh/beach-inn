/* CONTAINERS */
const durationContainer = document.getElementById('duration-container');
const dateContainer = document.getElementById('date-container');
const peopleContainer = document.getElementById('people-container');
const priceContainer = document.getElementById('price-container');

/* DURATION */
let duration;
function validateDuration(){
    duration = document.getElementById('duration').value;

    if(duration != "" && duration > 0){
        duration = document.getElementById('duration').value;;
        dateContainer.classList.remove('not-visible');
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

        if(window.confirm("Do you want to continue?")){
            calcPrice(duration, date, people);
        } 
    } else {
        alert('invalid duration');
    }
}

/* CALC PRICE */
function calcPrice(duration, date, people){
    priceContainer.classList.remove('not-visible');
    
    durationContainer.classList.add('not-visible');
    dateContainer.classList.add('not-visible');
    peopleContainer.classList.add('not-visible');



    priceContainer.innerHTML += "<br> Duration: " + duration + "<br> Arrivel " + date + " <br> People " + people;
}