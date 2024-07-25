# Entrega 02 - Curso Backend #70065 **CoderHouse**

Se desarrollará un servidor que contenga los endpoints y servicios necesarios para gestionar los productos en el e-commerce. 

## Tabla de Contenidos
1. [Instalación](#instalación)
2. [Consigna](#consigna)
3. [AspectosIncluir](#aspectos-a-incluir)
4. [Contenido](#contenido-publicado)
5. [Endpoint](#endpoints)
6. [Estructura](#estructura-del-proyecto)

## Instalación
### Requisitos minimos y deseables
- Node JS v20.14.0 (Minimo deseable)
- Visual Studio Code v1.90.0 (user setup)
### Paquetes NPM
- express : 4.19.2
- express-handlebars : 7.1.3
- socket.io : 4.7.5

## Consigna: 
Configurar nuestro proyecto para que trabaje con Handlebars y websocket.

## Aspectos a incluir
1. Configurar el servidor para integrar el motor de plantillas Handlebars e instalar un servidor de socket.io al mismo.
2. Crear una vista “home.handlebars” la cual contenga una lista de todos los productos agregados hasta el momento
3. Además, crear una vista “realTimeProducts.handlebars”, la cual vivirá en el endpoint “/realtimeproducts” en nuestro views router, ésta contendrá la misma lista de productos, sin embargo, ésta trabajará con websockets
4. Al trabajar con websockets, cada vez que creemos un producto nuevo, o bien cada vez que eliminemos un producto, se debe actualizar automáticamente en dicha vista la lista

## Contenido publicado
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/Alastair666/BackEnd-02.git
2. Se debe entregar:
   Configurar nuestro proyecto para que trabaje con Handlebars y websocket..
   ```sh
   /(index) /home /realTimeProducts
3. Instalación de Libreria Express (Para node_modules):
   ```sh
   npm install express express-handlebars socket.io
4. Instalación de Libreria Express-Validator (Para node_modules):
   ```sh
   npm install express-validator
5. Se ejecuta el servidor con el siguiente comando
   ```sh
   npm start

## Endpoints
### General
- **/ : GET** Este método permite redireccionar a la página raiz del servidor
- **/home : GET** Este método permite redireccionar a la página principal
- **/realTimeProducts : GET** Este método permite redireccionar a la página de gestión de productos

### Products
- **/api/products : POST** Este método permite ingresar un producto nuevo, validando que no se repita el ID del registro
- **/api/products/:pid : DELETE** Este método permite eliminar un producto nuevo, validando que exista el ID del registro
   
## Estructura del proyecto
```
BackEnd-E02/
├── node_modules/
├── src/
│   ├── public/js
│   ├── home.js
│   ├── index.js
│   ├── realTimeProducts.js
├── routes/
│   ├── views.router.js/
├── view/
├── ├── layouts/
├── ├── ├── main.handlebars
├── ├── home.handlebars
├── ├── index.handlebars
├── ├── realTimeProducts.handlebars
├── app.js
├── utils.js
├── package-lock.json
├── package.json
├── README.md