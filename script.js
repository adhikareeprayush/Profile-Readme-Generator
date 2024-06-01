const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //use async function to fetch data from the server
    const username = form.elements.username.value;
    getUser(username);
});

async function getUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('error');
    }
}