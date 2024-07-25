import { fileURLToPath } from "url"
import { dirname } from "path"
//import fs from "fs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Crear gestión de archivos JSON
const pathProducts = '/json/products.json'

//Cargando Productos de BD
const productos = [
    {
      pid: 1,
      title: 'Detergente liquido',
      description: 'Fabuloso',
      code: 'MXN09',
      price: 100.58,
      stock: 10,
      category: 'Limpiadores'
    },
    {
      pid: 2,
      title: 'Detergente en Polvo',
      description: 'Foca',
      code: 'MXN08',
      price: 87.62,
      stock: 140,
      category: 'Limpiadores'
    },
    {
      pid: 3,
      title: 'Detergente liquido',
      description: 'Mas Color',
      code: 'MXN17',
      price: 180.58,
      stock: 169,
      category: 'Limpiadores'
    },
    {
      pid: 4,
      title: 'Suavizante de Telas',
      description: 'Suavitel',
      code: 'MXN21',
      price: 210.93,
      stock: 693,
      category: 'Telas'
    },
    {
      pid: 5,
      title: 'Limpiador de Superficies',
      description: 'Maestro Limpio',
      code: 'MXN22',
      price: 48,
      stock: 75,
      category: 'Limpiadores'
    },
    {
      pid: 6,
      title: 'Acondicionador',
      description: 'Nutribella',
      code: 'MXN28',
      price: 93,
      stock: 47,
      category: 'Acondicionador'
    },
    {
      pid: 7,
      title: 'Salchichas',
      description: 'FUD',
      code: 'MXN78',
      price: 65,
      stock: 47,
      category: 'Salchichoneria'
    },
    {
      pid: 8,
      title: 'Microfibra',
      description: '1',
      code: 'MXN69',
      price: 45,
      stock: 36,
      category: 'Accesorios'
    },
    {
      pid: 9,
      title: 'a',
      description: 'a',
      code: 'a',
      price: 1,
      stock: 2,
      category: 'cat'
    }
  ]
/**  
 * Deberá de traer todos los productos de la base
 * **/
export function obtieneListaProductos(){
    //let prods
    //let fileProds
    try
    {
        /*/FILE SYSTEM
        if (productos.length > 0){
            productos.splice(0, productos.length)
        } 
        fileProds = fs.readFileSync(__dirname + pathProducts, 'utf8')
        prods = JSON.parse(fileProds)
        productos.push(...prods)//*/
    }
    catch (ex){
        console.error(ex, `Error al Cargar el producto`)
    }
    return productos
}
/**  
 * Deberá agregar un nuevo producto con los campos
 * **/
export function agregaProducto(title, description, code, price, stock, category){
    try{
        let prod_id_new = productos.length+1
        let ban_id = true
        //Ciclo de validacion
        while (ban_id){
            const prod = productos.find((p)=> p.pid === prod_id_new)
            if (prod){
                prod_id_new = prod_id_new+1
            }
            else
                ban_id = false
        }
        //Definiendo nuevo producto
        const newProd = {
            pid : prod_id_new, //Genera ID único por Producto
            title : title, 
            description : description, 
            code : code, 
            price : parseFloat(price), 
            stock : parseInt(stock), 
            category : category
        }
        productos.push(newProd)
        /*/Guardando archivo
        fs.writeFile(__dirname + pathProducts, JSON.stringify(productos), (err) => err && console.error(err))//*/
        console.log(`Producto '${description}' guardado exitosamente`)
    }
    catch (ex){
        console.error(ex, `Error al guardar el producto ${description}`)
    }
    finally{
        console.log(productos)
    }
}
/**  
 * Deberá de traer solo el producto con el ID especificado
 * **/
export function eliminaProducto(pid){
    try
    {
        const prod_id = parseInt(pid)
        if (prod_id > 0){
            const prod = productos.find((p)=> p.pid === prod_id)
            if (prod){
                productos = productos.filter((p)=> p.pid !== prod_id)
                /*/Guardando archivo
                fs.writeFile(pathProducts, JSON.stringify(productos, null, 2))//*/
                console.log(`Producto '${prod.title}' guardado exitosamente`)
            }
            else
                console.error(`El Producto con el ID ${prod_id} no fue localizado`)
        }
        else
            console.error(`Debe establecer el ID del producto para actualizar`)
    }
    catch (ex){
        console.error(ex, `Excepcion producida al eliminar el producto: ${ex}`)
    }
}

export default __dirname