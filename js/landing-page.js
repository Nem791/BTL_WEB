let trailerId;
let reviewId;


const params = new URLSearchParams(window.location.search);

function info() {
    let title = localStorage.getItem('movieTitle');
    document.getElementById('title').innerText = JSON.parse(title);
    // document.getElementById('plot').innerText = data.description;
    document.getElementById('bg').src = `./img/${params.get('id')}.jpg`;
    // if (!isNaN(params.get('id'))) {
    //     document.getElementById('bg').src = `./img/${params.get('id')}.jpg`;
    // } else {
    //     document.getElementById('bg').src = `http://image.tmdb.org/t/p/original/${params.get('id')}.jpg`;
    // }
}

info();

function changeInfo(movieId) {
    info(movieId);
    changeBackground(movieId);
    $("html, body").animate({ scrollTop: 0 }, "slow");
    localStorage.setItem('movieId', movieId);
}

// window.onload = function () {
//     console.log('Da vao landing page');
//     tempId = localStorage.getItem('movieId');
//     info(tempId);
//     changeBackground(tempId);
//     localStorage.setItem('movieId', tempId);
// }

function trailer() {
    window.open(`https://www.youtube.com/results?search_query=trailer`);
}
function review() {
    window.open(`https://www.imdb.com/`);
}

