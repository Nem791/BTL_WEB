// FETCH API
const movie_titles = document.getElementsByClassName("movie-list-item-title");
const movie_desc = document.getElementsByClassName("movie-list-item-desc");
const movie_img = document.getElementsByClassName("movie-list-item-img");
const movie_id1 = document.getElementsByClassName('movie-list-item-button');

for (i = 0; i < movie_titles.length; i++) {
    let title = movie_titles[i].innerText;
    let thePath = movie_img[i].src;
    console.log(thePath);
    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1);

    movie_id1[i].addEventListener('click', () => {
        localStorage.setItem('movieTitle', JSON.stringify(title));
        location.href = `./landing-page.html?id=${getLastItem(thePath).replace(".jpg", "").replace(".jpeg", "")}`;
    })
}

function changetoSearch() {
    location.href = './search.html';
}