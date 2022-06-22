function greeting() {
    let username = 'Pablo';

    function displayUserName() {
        return `Hello ${username}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);         // devuelve declaración de la fn
console.log(g());       // devuelve valor de la fn - recuerda contexto