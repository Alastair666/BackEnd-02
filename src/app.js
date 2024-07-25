import express from "express"
import handlebars from "express-handlebars"
// Importar __DIRNAME
import __dirname from "./utils.js" //Configuración Inicial
import viewsRouter from "./routes/views.router.js"
import { Server } from "socket.io"

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// Configurar Handlebars para lectura de contenido de los endpoints
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
// Utilizar recursos estaticos
app.use(express.static(__dirname + '/public'))

// Se realiza el levantamiento del Server desde SOCKET.IO
const httpServer = app.listen(PORT, ()=>{ console.log(`Server running on port ${PORT}`) })
const socketServer = new Server(httpServer)

// Integrando "router" 
app.use("/", viewsRouter)

// Se crea evento de escucha
socketServer.on("connection", socket => {
    const timestamp = Date.now()
    console.log(`Nuevo cliente conectado: ${timestamp}`)
    
    socket.on("disconnect", data=>{
        console.log(`Cliente desconectado: ${data}`)
    })

    socket.on("message", data=>{
        console.log(data)
    })
})