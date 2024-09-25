
# Cliente/servidor
# Chat en Tiempo Real con Node.js y Socket.IO

Este proyecto es una aplicación de chat en tiempo real desarrollada con **Node.js**, **Express** y **Socket.IO**. Permite la comunicación instantánea entre múltiples usuarios conectados, además de respuestas automáticas generadas por un bot simple.

## Índice

1. [Descripción](#descripción)
2. [Instalación](#instalación)
3. [Uso](#uso)
4. [Arquitectura](#arquitectura)


## Descripción

Este proyecto implementa un sistema de chat en tiempo real usando **WebSockets** para la comunicación bidireccional entre el cliente y el servidor. Los usuarios pueden enviar y recibir mensajes al instante. También cuenta con un **bot de respuestas automáticas**, que responde a ciertas palabras clave como "hola", "adios", y "ayuda".


### Prerrequisitos

Asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [NPM](https://www.npmjs.com/get-npm) (Node Package Manager)

### Pasos para la instalación

1. Clona el repositorio a tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git

   Instala las dependencias: instalación de npm
Inicia el servidor: nodo index.js
El servidor en: http://localhost:3000.


### Uso

Abre tu navegador y dirígete a http://localhost:3000. Escribe un mensaje en el cuadro de texto y haz clic en "Enviar". Verás los mensajes en tiempo real, tanto de otros usuarios como del bot. El bot se responde automáticamente a las siguientes palabras clave: "hola" "Hola, .. . . . . . . . . . . . . . . . . . "adios" - "Adiós, "Nos vemos pronto" "ayuda" "Estoy aquí para ayudarte, "En qué puedo asistirte?"

### Arquitectura

El proyecto sigue una arquitectura cliente/servidor. Aquí hay un resumen de los componentes:

Cliente: El navegador del usuario, que muestra la interfaz de chat. El archivo index.html contiene la estructura de la interfaz y el código JavaScript necesario para interactuar con el servidor a través de Socket.IO.

Servidor: Un servidor en Node.js que maneja la lógica del chat, retransmite los mensajes y respuesta automáticamente con un bot.
Tecnologías Usadas
Node.js: Plataforma para ejecutar código JavaScript en el servidor. Express: Marco para crear servidores web en Node.js. Socket.IO: Biblioteca para habilitar comunicación en el tiempo utilizando real WebSockets. HTML/CSS: Para estructurar y estilizar la interfaz de usuario. Características Chat en tiempo real entre múltiples usuarios. Respuestas automáticas de un bot según palabras clave. Interfaz y amigable. Comunicación eficiente gracias al uso de WebSockets.