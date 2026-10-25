// Función para abrir aplicaciones
function openApp(appId) {
    const app = document.getElementById(appId);
    app.style.display = 'flex';
    // Traer la ventana al frente si hay varias abiertas
    app.style.zIndex = "100";
}

// Función para cerrar aplicaciones
function closeApp(appId) {
    const app = document.getElementById(appId);
    app.style.display = 'none';
}

// Función para el reloj de la barra de tareas
function updateClock() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = now.toLocaleTimeString('es-ES', options);
    document.getElementById('clock').innerText = timeString;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);
updateClock();
