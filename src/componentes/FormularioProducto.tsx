import {useState} from 'react'
import { anadirProducto } from '../firebase/services';
import { type CategoriaElectronica } from '../types';


type FormularioProductoProps = {
    onClose: () => void
}

function FormularioProducto({ onClose }: FormularioProductoProps) {
    const [nuevoProducto, setNuevoProducto] = useState({
        nombre: '',
        precio: 0,
        categoria: 'Portátiles' as CategoriaElectronica,
        estado: 'nuevo' as 'nuevo' | 'segundaMano',
    });

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await anadirProducto(nuevoProducto);

      // Limpiamos el formulario para poder añadir otro
      setNuevoProducto({ nombre: '', precio: 0, categoria: 'Portátiles' as CategoriaElectronica, estado: 'nuevo' });
      alert('¡Producto creado con éxito!');

    } catch (error) {
      alert('Hubo un error al guardar el producto');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-producto">
      <header className="form-header">
        <h3>Añadir Nuevo Producto</h3>
      </header>

      <input type="text" placeholder="Nombre del producto" value={nuevoProducto.nombre} required onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })} />

      <input type="number" placeholder="Precio" value={nuevoProducto.precio || ''} required onChange={(e) => setNuevoProducto({ ...nuevoProducto, precio: Number(e.target.value) })} />

      <select value={nuevoProducto.categoria} required onChange={(e) => setNuevoProducto({ ...nuevoProducto, categoria: e.target.value as CategoriaElectronica })}>
        <option value="">Selecciona Categoría...</option>
        <option value="Portátiles">Portátiles</option>
        <option value="Móviles">Móviles</option>
        <option value="Televisores">Televisores</option>
        <option value="Tablets">Tablets</option>
        <option value="Periféricos">Periféricos</option>
        <option value="Gaming">Gaming</option>
      </select>

      <select 
        value={nuevoProducto.estado}
        onChange={(e) => setNuevoProducto({ ...nuevoProducto, estado: e.target.value  as 'nuevo' | 'segundaMano'})}>
        <option value="nuevo">Nuevo</option>
        <option value="segundaMano">Segunda mano</option>
      </select>

      <div className="form-actions">
        <button type="submit" className="btn primary">Guardar</button>
        <button type="button" className="btn" onClick={onClose}>Volver</button>
      </div>
      
    </form>
  );
}

export default FormularioProducto
