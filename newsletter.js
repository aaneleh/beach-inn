
/***** SAVES EMAIL *****/
var localStorageEmails = localStorage.getItem('emails');
var emailList;
var repeatedEmail;

/* Gets info from local storage */
if(localStorageEmails !== null){
    emailList = JSON.parse(localStorageEmails);
} else {
    emailList = [];
}

function addEmail (email){
    /* Checks if this email is already on the array */
    repeatedEmail = false;
    for(var i = 0; i < emailList.length && repeatedEmail == false; i ++){
        if(email == emailList[i]){
            repeatedEmail = true;
            alert("This email is already in our newsletter");
        }
    }
    /* If not add it to the array */
    if(!repeatedEmail){
        if(window.confirm("Are you sure you want to add " + email + " to our newsletter? ")) {
            emailList.push(email);
            localStorage.setItem('emails', JSON.stringify(emailList));
        }
    }
}

/***** FORM EVENT LISTENER *****/
document.getElementById('newsletter-form').addEventListener('submit', e => {
    e.preventDefault();
    insertNewsletter(e);
});

function insertNewsletter(){
    if(document.getElementById('email-input').value != "") {
        let email = document.getElementById('email-input').value;
        addEmail(email);
    } else alert("Preencha seu email")
}