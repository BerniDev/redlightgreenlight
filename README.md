# Red Light Green Light - Progressive Web App

Este proyecto es una aplicación web progresiva (PWA) basada en el juego **Red Light, Green Light**, desarrollada con **React**, **Vite**, **TypeScript**, **Service Worker**, **Cypress**, y **ESLint**.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta rápida de construcción de proyectos front-end.
- **TypeScript**: Tipado estático sobre JavaScript.
- **Service Worker**: Para habilitar la funcionalidad offline.
- **Cypress**: Framework de pruebas end-to-end.
- **ESLint**: Herramienta de linting para mantener la calidad del código.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/BerniDev/redlightgreenlight.git

2. Navega al directorio del proyecto:

   ```bash
   cd redlightgreenlight

3. Instala las dependencias:

   ```bash
   npm install

## Ejecución en Desarrollo

- Ejecuta el comando:

   ```bash
   npm start

## Construcción y ejecución en local

- Ejecuta el comando:

   ```bash
   npm run serve

## Construcción y despliegue en local (probar service worker):

- Ejecuta el comando:

   ```bash
   npm run serve

## Pruebas

- Modo de Ejecución en Línea de Comandos (Headless):

   ```bash
   npm run cypress:run

- Modo Interactivo:

   ```bash
   npm run cypress:open

## PWA y Funcionalidad Offline

Este proyecto está configurado como una **Progressive Web App (PWA)** y funciona sin conexión después de haber sido visitado una vez, gracias a los Service Workers.

## Desplegar la aplicación

1. Construir:

   ```bash
   npm run build

2. Desplegar:

   ```bash
   npm run deploy

Tras unos segundos se pueden visualizar los cambios. La aplicación está desplegada en [https://bernidev.github.io/redlightgreenlight/](https://bernidev.github.io/redlightgreenlight/)
