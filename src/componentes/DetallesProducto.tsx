import { type Producto } from '../types'

type DetallesProductoProps = {
    producto: Producto | null
    onClose: () => void
}

function DetallesProducto({ producto, onClose }: DetallesProductoProps) {
  if (!producto) return null

  return (
    <article className="detalle-producto">
      <header className="detalle-header">
        <h3 className="detalle-titulo">{producto.nombre}</h3>
      </header>

      <div className="detalle-body">
        <p><strong>Precio:</strong> ${producto.precio}</p>
        <p><strong>Categoría:</strong> {producto.categoria}</p>
        <p><strong>Estado:</strong> {producto.estado}</p>
      </div>
        <button className="btn" onClick={onClose}>Cerrar</button>
    </article>
    
  )
}

export default DetallesProducto

