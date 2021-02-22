import React from 'react';
import './Carrito.css'
import Poducto from './Producto'

const Carrito = ({carrito,agregarProducto}) =>  ( 
    <div className="carrito">
        <h2>Carrito de compras</h2>
     {
      carrito.length === 0
      ?
      <p>No hay Productos en el carrito</p>
      :
      carrito.map(producto => (
        <Poducto
        key = {producto.id}
        producto = {producto}
        carrito = {carrito}
        agregarProducto = {agregarProducto}
        />
     ))
     }
    </div>
     );
 
export default Carrito;