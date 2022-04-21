let btnSignUp = document.querySelector('.btn-day');
let inputs = document.querySelectorAll('.in-name');

let emptyWarning = document.getElementById('empty');
emptyWarning.hidden = true;
let passwordWarning = document.getElementById('match');
passwordWarning.hidden = true;
let emailWarning = document.getElementById('email-validate');
emailWarning.hidden = true;
let successMessage = document.getElementById('success');
successMessage.hidden = true;

if (JSON.parse(localStorage.getItem("infor_users")) == null) {
    localStorage.setItem("infor_users", JSON.stringify([]));
}

// Email validate 
const pattern = /[\w\-\._]+@[\w\-\._]+\.\w{2,10}/;

btnSignUp.addEventListener('click', (e) => {
    e.preventDefault();

    // Hide warning 
    emptyWarning.hidden = true;
    passwordWarning.hidden = true;
    emailWarning.hidden = true;
    successMessage.hidden = true;

    for (const iterator of inputs) {
        if (iterator.value === '') {
            emptyWarning.hidden = false;
        } else if (inputs[2].value !== inputs[3].value) {
            passwordWarning.hidden = false;
        } else if (!inputs[1].value.match(pattern)) {
            emailWarning.hidden = false;
        } else {
            let inforJSON = localStorage.getItem("infor_users");
            inforJSON = JSON.parse(inforJSON);
            const found = inforJSON.find(element => element.emailAddress === inputs[1].value);
            if (found === undefined) {

                inforJSON.push({
                    UserName: inputs[0].value,
                    emailAddress: inputs[1].value,
                    password: inputs[2].value
                });
                localStorage.setItem("infor_users", JSON.stringify(inforJSON));
            }

            successMessage.hidden = false;
            break;
        }
    }

})