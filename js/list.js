let movieArray = localStorage.getItem('moviesInCart');

movieArray = JSON.parse(movieArray);
console.log(movieArray);
movieArray.forEach((item, index) => {
    let img;

    if (!isNaN(item.img)) {
        img = `./img/${item.img}.jpg`;
    } else {
        img = `http://image.tmdb.org/t/p/original/${item.img}.jpg`;
    }

    document.getElementById("movie_results").innerHTML += `<div class="movie_result">
    <img class="movie-result-img" src="${img}" alt="">
    <div class="movie-result-info">
        <span class="movie-result-item-title "> ${item.title} </span>
        <button class="movie-result-item-button movie-result-item-button-watch">Watch</button>
        <button class="movie-result-item-button movie-result-item-button-remove">Remove</button>
    </div>`;
})

let btns = document.querySelectorAll('.movie-result-item-button-watch');
let btnsRemove = document.querySelectorAll('.movie-result-item-button-remove');
btns = Array.from(btns);

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        location.href = `./landing-page.html?id=${movieArray[index].img}`;
    });

    btnsRemove[index].addEventListener('click', () => {
        movieArray.splice(index, 1);
        localStorage.setItem('moviesInCart', JSON.stringify(movieArray));
        location.reload();
    })
})

// btns[index].addEventListener('click', () => {
//     location.href = `./landing-page.html?id=${img}`;
// })

document.querySelector("#LogOutUser").addEventListener("click", () => {
    // e.preventDefault();
    console.log('xoa');
    let last_User = [];
    localStorage.setItem("last_User", JSON.stringify(last_User));
    getLognin.innerText = "Log in";
    localStorage.removeItem('moviesInCart');
    localStorage.removeItem('movieNumbers');
    location.reload();
})
