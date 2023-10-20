function updateClock() {
    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours();

    // Actualiza la posición de las manecillas
    var secondsRotation = (seconds / 60) * 360;
    var minutesRotation = ((minutes + seconds / 60) / 60) * 360;
    var hoursRotation = ((hours + minutes / 60) / 12) * 360;

    document.getElementById("seconds").style.transform = `rotate(${secondsRotation}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${minutesRotation}deg)`;
    document.getElementById("hour").style.transform = `rotate(${hoursRotation}deg)`;
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);

// Inicializa el reloj en la carga de la página
updateClock();


