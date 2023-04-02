// Pega o node do timer
const display = document.querySelector("#timer");

let timer = 3000; // Tempo em segundos => 50 minutos
let interval;

let buttons = document.querySelectorAll('button');


buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // Pega o id do elemento clicado
        if (e.target.id == "start-button") {
            startTimer();
            console.log('inicia o timer');
        } else if (e.target.id == "pause-button") {
            clearInterval(interval);
            console.log('pausa o timer');
        } else if (e.target.id == "reset-button") {
            clearInterval(interval)
            display.innerHTML = "50:00"
            console.log('reseta o timer')
        }
    })
})

const startTimer = () => {
    let minutes;
    let seconds;

    interval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        timer--
        display.textContent =  minutes + ":" + seconds

    },1000);

    if (timer < 0 ) {
        clearInterval(interval);
        display.innerHTML = "00:00";
    }
}
