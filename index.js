
const express = require('express');        // Importar dependencias
const http = require('http');
const socketIo = require('socket.io');


const app = express();                    // Crear aplicación Express y servidor HTTP
const server = http.createServer(app);


const io = socketIo(server);             // Inicializar Socket.IO


app.use(express.static(__dirname + '/public'));    // Servir archivos estáticos (cliente)


const botResponses = {                             // Bot de respuestas automáticas
    "hola": "Hola, ¿cómo estás?",
    "adios": "Adiós, ¡nos vemos pronto!",
    "ayuda": "Estoy aquí para ayudarte, ¿en qué puedo asistirte?",
    "default": "No entiendo tu mensaje. ¿Podrías repetirlo?"
};


function botResponse(message) {                     // Función para generar respuesta del bot
    const lowerCaseMessage = message.toLowerCase();
    return botResponses[lowerCaseMessage] || botResponses["default"];
}


io.on('connection', (socket) => {                  // Escuchar eventos de conexión de Socket.IO
    console.log('Nuevo usuario conectado');

    
    socket.on('chat message', (msg) => {           // Escuchar mensajes desde el cliente
        console.log('Mensaje recibido: ' + msg);

       
        io.emit('chat message', `Usuario: ${msg}`);  // Enviar mensaje a todos los clientes conectados

        
        const respuestaBot = botResponse(msg);       // Respuesta automática del bot
        setTimeout(() => {                // Simular un pequeño retraso en la respuesta del bot
            io.emit('chat message', `Servidor Bot: ${respuestaBot}`);
        }, 1000);                        // Esperar 1 segundo para la respuesta del bot
    });

    
    socket.on('disconnect', () => {            // Evento de desconexión
        console.log('Usuario desconectado');
    });
});


const PORT = 3000;                 // Iniciar servidor
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
