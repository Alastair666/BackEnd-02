const socket = io()

socket.emit("message", "Inicia forma alta productos")

// Creando evento de alta de productos
document.getElementById("altaProducto").addEventListener("submit", (event)=>{
    event.preventDefault()
    //Obteniendo datos del formulario
    const datosFormulario = new FormData(event.target)
    //Definiendo nuevo producto
    const newProd = {
        title : datosFormulario.get("txtTitulo"), 
        description : datosFormulario.get("txtDescripcion"), 
        code : datosFormulario.get("txtCodigo"), 
        price : parseFloat(datosFormulario.get("txtPrecio")), 
        stock : parseInt(datosFormulario.get("txtStock")), 
        category : datosFormulario.get("txtCategoria")
    }
    socket.emit("Agrega Producto", newProd)
    event.target.reset();
})

//Creando comunicación
socket.on("Agrega Producto", (newProd)=>{
    console.log("Funciona comunicación socket")
    console.log(newProd)
    //Definiendo opciones
    const opciones = {
        method: "POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(newProd),
        redirect: "follow"
    };
    //Consumiendo EndPoint
    fetch('/api/products', opciones)
    .then(() => {
        
        
    })
    .catch((error) => console.error(error))
})