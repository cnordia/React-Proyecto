import { useEffect, useState } from 'react'
import { getProductos } from '../firebase/services'
import { type Producto } from '../types';
import { eliminarProducto } from '../firebase/services';
import DetallesProducto from './DetallesProducto';
import FormularioProducto from './FormularioProducto';


function ListaProductos() {
    
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);
  const [nuevoProducto, setNuevoProducto] = useState<boolean>(false);
    
      const obtenerDatos = async() =>{
        try{
          const todosProductos = await getProductos();
          setProductos(todosProductos);
          console.log(todosProductos, 'asdasdasdasdasd')
        }
        catch(error){
          console.log(error)
        }finally{
          setLoading(false)
        }

      }

    useEffect(() =>{
      setLoading(true)
      obtenerDatos();
    },[])


  return (
    <main className="productos-page">
      {loading && <p className="loading">Cargando productos...</p>}

      {nuevoProducto ? (
        <section className="panel panel-form">
          <FormularioProducto onClose={() => setNuevoProducto(false)} />
        </section>
      ) : productoSeleccionado ? (
        <section className="panel panel-detalle">
          <DetallesProducto producto={productoSeleccionado} onClose={() => setProductoSeleccionado(null)} />
        </section>
      ) : (
        <section className="panel panel-list">
          <div className="panel-actions">
            <button onClick={obtenerDatos} className="btn">Recargar Productos</button>
            <button onClick={() => setNuevoProducto(true)} className="btn primary">Crear nuevo Producto</button>
          </div>

          <div className="grid-productos">
            {productos.map(prod => (
              <article className="producto-card" key={prod.id}>
                <h4 className="producto-nombre">{prod.nombre}</h4>
                <div className="producto-meta">
                  <span className="precio">${prod.precio}</span>
                  <span className="categoria">{prod.categoria}</span>
                </div>
                <div className="producto-actions">
                  <button className="btn" onClick={() => eliminarProducto(prod.id)}>Eliminar</button>
                  <button className="btn" onClick={() => setProductoSeleccionado(prod)}>Detalles</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default ListaProductos
