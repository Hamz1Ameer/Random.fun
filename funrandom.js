const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');


const generateJokes = () => {
    const setHeaders = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com', setHeaders)
        .then((res) => (res.json()))
        .then((data) => {
            joke.innerHTML = data.joke;
        })
        .catch((error) => {
            console.log(error);
        })
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();