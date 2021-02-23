import React from "react";

const Producto = ({ producto, carrito, agregarProducto, productos }) => {
  const { nombre, precio, id } = producto;

  //Agregar producto al carrito
  const seleccionarCarrito = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    agregarProducto([...carrito, producto]);
  };

  //Eliminando Producto del carrito
  const eliminarProducto = id => {
      const producto = carrito.filter((carrito) => carrito.id !== id )
      //colocar los productos en el state
    agregarProducto(producto);
  }
  return (
    <div>
      <h2>{nombre}</h2>
      <p>${precio}</p>
      {productos ? (
        <button type="button" onClick={() => seleccionarCarrito(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};

export default Producto;
