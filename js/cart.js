try {
    let addCart = document.querySelector('.btn-cart');
    
    addCart.addEventListener('click', () => {
        let moviesInCart = localStorage.getItem('moviesInCart');
        let currentId = localStorage.getItem('movieTitle');
        currentId = JSON.parse(currentId);

        const params = new URLSearchParams(window.location.search);
        const getLognin = document.getElementById("dropdownMenuLink");
        if (getLognin.innerText == 'Profile') {
            alert('You must log in to add')
        } else {
            if (moviesInCart) {
    
                let tempArray = localStorage.getItem('moviesInCart');
                tempArray = JSON.parse(tempArray);
                if (tempArray.some(e => e.img === params.get('id'))) {
                    alert('This movie has already been added');
                }
                else {
                    console.log(currentId);
                    tempArray.push({
                        title: currentId,
                        img: params.get('id')
                    });
                    alert(`Movie ID ${currentId} added to your favourite`)
                    localStorage.setItem('moviesInCart', JSON.stringify(tempArray));
                    cartCount();
                }
    
            } else {
                console.log(currentId);
                let movieArray = [];
                movieArray.push({
                    title: currentId,
                    img: params.get('id')
                });
                alert(`Movie ID ${currentId} added to your favourite`)
                localStorage.setItem('moviesInCart', JSON.stringify(movieArray));
                cartCount();
            }
        }
    
    });
} catch (error) {
    console.log(error);
}

function countMovieNumbers() {
    let movieNumbers = localStorage.getItem('moviesInCart');
    if (movieNumbers) {
        document.querySelector('.cart span').textContent = JSON.parse(movieNumbers).length;
    }
}

function cartCount() {
    let movieNumbers = localStorage.getItem('moviesInCart');

    movieNumbers = JSON.parse(movieNumbers).length;

    if (movieNumbers) {
        localStorage.setItem('movieNumbers', movieNumbers);
        document.querySelector('.cart span').textContent = movieNumbers;
    } else {
        localStorage.setItem('movieNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

}
countMovieNumbers();
































