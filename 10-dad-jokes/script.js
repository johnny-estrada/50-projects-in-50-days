const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();


// Using ASYNC / AWAIT
async function generateJoke() {
        try {
            const config = {
                headers: {
                    Accept: 'application/json'
                },
            }

            const res = await fetch('https://icanhazdadjoke.com', config);
            const data = await res.json();

            jokeEl.innerHTML = data.joke;
            console.log('Status Code:', data.status);

        } catch (e) {
            console.log("Error!", e)

        }
        
    };


// Using .then
// function generateJoke() {
//     // Setting header with Accept
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke;
//         })
// };