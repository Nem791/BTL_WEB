// Log in Log out. Kiem tra xem da log in hay chua
const lastUserJSON = localStorage.getItem("last_User");
const lastUserJSONConvert = JSON.parse(lastUserJSON);
const getLognin = document.getElementById("dropdownMenuLink");


if (lastUserJSONConvert === null) {
    getLognin.innerText = 'Profile';
    // Hide log out & show login button button
    document.getElementById('nameUser').hidden = false;
    document.getElementById('LogOutUser').hidden = true;
} else {

    // Hide login button & show log out button
    document.getElementById('nameUser').hidden = true;
    document.getElementById('LogOutUser').hidden = false;
    getLognin.innerText = lastUserJSONConvert;
}


document.querySelector("#LogOutUser").addEventListener("click", () => {
    console.log('xoa');
    localStorage.removeItem("last_User");


    // Show login button 
    document.getElementById('nameUser').hidden = false;

    getLognin.innerText = "Log in";
    localStorage.removeItem('moviesInCart');
    localStorage.removeItem('movieNumbers');
    location.reload();
});