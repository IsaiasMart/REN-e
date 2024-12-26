const targetElements = document.getElementsByClassName("animated-text");  
const musicElement= document.getElementById("musica");
const length = 4;
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
    // Itera sobre todos los elementos y actualiza su contenido
    for (let i = 0; i < targetElements.length; i++) {
        targetElements[i].textContent = generateRandomString(length);
    }
}
musicElement.addEventListener("click",function(event){

    
}

);




setInterval(updateText, 600);

updateText();
