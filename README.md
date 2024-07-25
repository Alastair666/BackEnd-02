# Entrega 02 - Curso Backend #70065 **CoderHouse**

Se desarrollará un servidor que contenga los endpoints y servicios necesarios para gestionar los productos y carritos de compra en el e-commerce

## Tabla de Contenidos
1. [Instalación](#instalación)
2. [Contenido](#contenido-publicado)
3. [Estructura](#estructura-del-proyecto)

## Instalación
### Requisitos minimos y deseables
- Node JS v20.14.0 (Minimo deseable)
- Visual Studio Code v1.90.0 (user setup)
### Paquetes NPM
- express : 4.19.2
- express-handlebars : 7.1.3
- socket.io : 4.7.5

## Contenido publicado
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/Alastair666/BackEnd-02.git
2. Se debe entregar:
   Configurar nuestro proyecto para que trabaje con Handlebars y websocket..
   ```sh
   /api/products /api/carts
3. Instalación de Libreria Express (Para node_modules):
   ```sh
   npm install express
4. Instalación de Libreria Express-Validator (Para node_modules):
   ```sh
   npm install express-validator
   
## Estructura del proyecto
```
BackEnd-E02/
├── json/
│   ├── carts.json/
│   ├── products.json/
├── node_modules/
├── scripts/
│   ├── validadores.js/
├── app.js
├── package-lock.json
├── package.json
├── README.md