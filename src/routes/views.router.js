import express from "express"
import { agregaProducto, obtieneListaProductos, eliminaProducto } from "../utils.js"

const router = express.Router()

export default function viewsRouter(socketServer){
    // Ruta general "Inicio"
    router.get("/", (req,res)=>{
        res.render('index')
    })

    // Ruta general "Página Principal"
    router.get("/home", (req,res)=>{
        res.render('home', { products : obtieneListaProductos() })
    })

    // Ruta para "Productos en tiempo real"
    router.get("/realTimeproducts", (req,res)=>{
        res.render('realTimeProducts', { products : obtieneListaProductos() })
    })

    // Ruta para añadir "Productos en tiempo real"
    router.post("/api/products", (req,res)=>{
        const { title, description, code, price, stock, category } = req.body
        const newProd =
        {
            title : title, 
            description : description, 
            code : code, 
            price : price, 
            stock : stock, 
            category : category
        }
        agregaProducto(title, description, code, price, stock, category)
        socketServer.emit("Agrega Producto", newProd)
        res.status(200)
        //res.render('realTimeProducts', { products : obtieneListaProductos() })
    })
    // Ruta para eliminr "Productos en tiempo real"
    router.delete("/api/products/:pid", (req,res)=>{
        const prod_id = parseInt(req.params.pid)
        eliminaProducto(prod_id)
        socketServer.emit("Elimina Producto", prod_id)
        res.status(200)
    })

    return router
}