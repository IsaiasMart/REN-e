            const targetElements = document.getElementsByClassName("animated-text");  
            const musicElement= document.getElementById("musica");
            const audio= new Audio("musica op1.mp4");
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
                
                for (let i = 0; i < targetElements.length; i++) {
                    targetElements[i].textContent = generateRandomString(length);
                }
            }





            musicElement.addEventListener("click",function(event){
                

                    if (audio.paused) {
                        audio.play(); // Reproduce la canción si está pausada
                        musicElement.textContent = "Pausar Canción"; // Cambia el texto del botón
                      } else {
                        audio.pause();
                        musicElement.textContent = "Reproducir Canción"; // Cambia el texto del botón
                      }
                    }
                
            );




            setInterval(updateText, 600);

            updateText();
