import express from "express"
import { agregaProducto, obtieneListaProductos } from "../utils.js"

const router = express.Router()



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
    
    agregaProducto(title, description, code, price, stock, category)
    res.render('realTimeProducts', { products : obtieneListaProductos() })
})

// Exportando 
export default router