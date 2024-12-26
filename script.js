
const targetElement = document.getElementById("animated-text");  

const length = 12;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateRandomString(len) {
    let result = "";
    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

function updateText() {
    
    
        targetElement.textContent = generateRandomString(length);
    
}

setInterval(updateText, 80);

updateText();
