import React from 'react';

const Producto = ({producto, carrito,  agregarProducto, productos,}) => {

     const { id, nombre, precio} = producto

     // Agregar producto al carrito
     const seleccionaProducto = id => {
          const producto = productos.filter(producto => id == producto.id)[0]
          agregarProducto([
               ...carrito, producto
          ])
     }

     // Eliminar producto al carrito
     const eliminaProducto = id => {
          const productos = carrito.filter(producto => producto.id !== id)
          agregarProducto(productos)
     }

     return ( 
     <div>
          <h2> {nombre}</h2>
          <p> Precio: ${precio}</p>
          {
               productos 
               ?
                    (          
                         <button 
                              type="button"
                              onClick={() => seleccionaProducto(id)}
                              >Comprar 
                         </button>
                    )
               :
                    (
                         <button 
                              type="button"
                              onClick={() => eliminaProducto(id)}
                              >Eliminar 
                         </button>
                    )
          }
     </div> );
}
 
export default Producto;