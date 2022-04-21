let btnSignUp = document.querySelector('.btn-day');
let inputs = document.querySelectorAll('.in-name');
let emptyWarning = document.getElementById('empty');
emptyWarning.hidden = true;
let passwordWarning = document.getElementById('match');
passwordWarning.hidden = true;
let successMessage = document.getElementById('success');
successMessage.hidden = true;

// Email validate 
const pattern = /[\w\-\._]+@[\w\-\._]+\.\w{2,10}/;

btnSignUp.addEventListener('click', (e) => {
    e.preventDefault();

    // Hide warning 
    emptyWarning.hidden = true;
    passwordWarning.hidden = true;
    successMessage.hidden = true;

    inputs.forEach(element => {
        if (element.value === '') {
            emptyWarning.hidden = false;
        } else {
            let user = JSON.parse(localStorage.getItem('infor_users'));

            const checkUser = user.findIndex(element => element.UserName === inputs[0].value);
            if (checkUser !== -1) {
                if (user[checkUser].password === inputs[1].value) {
                    // Hide log in button 
                    btnSignUp.hidden = true;

                    // Show success mesage 
                    successMessage.hidden = false;

                    const myTimeout = setTimeout(() => {
                        localStorage.setItem("last_User", JSON.stringify(inputs[0].value));
                        location.href = './index.html';
                    }, 2000);
                } else {
                    passwordWarning.hidden = false;
                }

            } else {
                passwordWarning.hidden = false;
            }
        }
    })
})