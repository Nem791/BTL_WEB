let movieNumbers = localStorage.getItem('moviesInCart');


const paramsSearch = new URLSearchParams(window.location.search);
console.log(paramsSearch.get('id'));

// Update so luong phim trong Favorites 
if (movieNumbers) {
    document.querySelector('.cart span').textContent = JSON.parse(movieNumbers).length;
}

// Nut Search 
let searchBtn = document.getElementById('button');
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let x = document.getElementById("search-data").value;
    location.href = `./search.html?id=${x}`;
});

const data = [
    {
        "title": "Aquaman",
        "img": "17"
    },
    {
        "title": "Kick Ass 2",
        "img": "11"
    },
    {
        "title": "Due Date",
        "img": "10"
    },
    {
        "title": "The Emoji Movie",
        "img": "12"
    },
    {
        "title": "Encanto",
        "img": "13"
    },
    {
        "title": "Paths of Glory",
        "img": "14"
    },
    {
        "title": "The Simpsons",
        "img": "rtMdtzywcAGOrF6t8fbxJBqpdcq"
    },
    {
        "title": "Medusa",
        "img": "fs8RXnnJkYKo53R8A6eakzcTTHj"
    },
    {
        "title": "The Colony",
        "img": "8FhLL4VHFt5UvhAKe8S945U0DOn"
    },
    {
        "title": "Ride the Eagle",
        "img": "fkEVjHePiZJbDHKA0OhdXWTEbj4"
    },
    {
        "title": "Fear Street Part Two",
        "img": "5dNTxhoGDTHHGqUTdxcr4H1dqlU"
    },
    {
        "title": "Witch Hunt",
        "img": "gLT5yKPvvu5uzj0nHeNUQVZVv4T"
    }
]



// Hien ket qua search 
const result = data.find(film => film.title.search(paramsSearch.get('id')) !== -1);
const resultIndex = data.findIndex(film => film.title.toLowerCase().search(paramsSearch.get('id').toLowerCase()) !== -1);

function render() {
    try {
        console.log(data[resultIndex].img);
    } catch (error) {
        console.log(error);
        document.getElementById("movie_results").innerHTML += `<div style="color: white; font-size: large;" class="movie_result">No result found</div>`;
        return;
    }

    if (resultIndex) {
        let img;
        let id;
    
        if (!isNaN(data[resultIndex].img)) {
            img = `./img/${data[resultIndex].img}.jpg`;
        } else {
            img = `http://image.tmdb.org/t/p/original/${data[resultIndex].img}.jpg`;
        }

        // Set id cho URL 
        id = data[resultIndex].img;
    
        document.getElementById("movie_results").innerHTML +=
            `<div class="movie_result">
                <img class="movie-result-img" src="${img}" alt="">
                <div class="movie-result-info">
                    <span class="movie-result-item-title"> ${data[resultIndex].title} </span>
                    <p class="movie-list-item-desc">2021
                    </p>
                    <button class="movie-result-item-button">Watch</button>
            </div>`;

        let watchBtn = document.querySelector('.movie-result-item-button');
        watchBtn.addEventListener('click', () => {
            location.href = `./landing-page.html?id=${id}`;
            localStorage.setItem('movieTitle', JSON.stringify(data[resultIndex].title));
        });

    } else {
        console.log('Not Found');
    }
}

render();

