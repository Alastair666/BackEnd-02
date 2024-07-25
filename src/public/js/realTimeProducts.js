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
    //Definiendo opciones
    const opciones = {
        method: "POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(newProd),
        //redirect: "follow"
    };
    //Consumiendo EndPoint
    fetch('/api/products', opciones)
    .then(() => {
        event.target.reset();
    })
    .catch((error) => console.error(error))
})

const botonesEliminar = document.querySelectorAll("button.btn-delete-confirm")
if (botonesEliminar != null){
    console.log(botonesEliminar)    
    for (let btn of botonesEliminar){
        //Añadiendo evento de eliminación
        btn.addEventListener("click", (event)=>{
            event.preventDefault()
            const idProd = btn.id
            if (idProd != null){
                //Definiendo opciones
                const opciones = {
                    method: "DELETE",
                    //redirect: "follow"
                };
                //Consumiendo EndPoint
                fetch(`/api/products/${idProd}`, opciones)
                .then(() => {
                    event.target.reset();
                })
                .catch((error) => console.error(error))
            }
        })
    }
}

//Creando sockest de comunicación
socket.on("Agrega Producto", (newProd)=>{
    //Mostrando Mensaje
    console.log(`Funciona Socket: ${newProd}`)
    Swal.fire({
        title: `<strong>Registro Completado!</strong>`,
        icon: "success",
        html: `Diste de alta <b>un producto nuevo</b>. Podrás verlo en la lista.`,
        confirmButtonText: `<i class=""fa fa-long-check-circle-fill""></i>Aceptar`,
        timer: 4000,
        willClose: () => {
            location.href = "/realTimeProducts"
        }
    }).then((result)=>{
        console.log(result)
        if (result.isConfirmed || result.dismiss === Swal.DismissReason.cancel){
            location.href = "/realTimeProducts"
        }
    })
})
socket.on("Elimina Producto", (newProd)=>{
    //Mostrando Mensaje
    console.log(`Funciona Socket: ${newProd}`)
    Swal.fire({
        title: `<strong>Registro Completado!</strong>`,
        icon: "success",
        html: `Acabas de <b>eliminar un producto</b> de la lista.`,
        confirmButtonText: `<i class=""fa fa-long-check-circle-fill""></i>Aceptar`,
        timer: 4000,
        willClose: () => {
            location.href = "/realTimeProducts"
        }
    }).then((result)=>{
        console.log(result)
        if (result.isConfirmed || result.dismiss === Swal.DismissReason.cancel){
            location.href = "/realTimeProducts"
        }
    })
})
