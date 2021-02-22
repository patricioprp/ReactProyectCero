import React, { Fragment,useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Producto from './Components/Producto';
import Carrito from './Components/Carrito';

function App() {
  //crear un listado de producto
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa Node.js', precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 20 },
  ]);

  //state para el carrito de compras
  const [ carrito, agregarProducto ] = useState([]); 

  //Obtener la fecha
  let fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header
      titulo = "Tienda Virtual"
       />
       <h1>Lista de productos</h1>
       {
       productos.map(producto => (
        <Producto 
        key={producto.id}
        producto = {producto}
        carrito = {carrito}
        productos = {productos}
        agregarProducto = {agregarProducto}
        />
       ))
       }
       <Carrito 
       carrito = {carrito}
       agregarProducto = {agregarProducto}
       />
      <Footer
      fecha = {fecha}
       />
    </Fragment>
  );
}

export default App;
