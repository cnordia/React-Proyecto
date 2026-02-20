import { addDoc, deleteDoc, doc, collection, getDocs } from "firebase/firestore";
import { db } from "./config";
import type { Producto } from "../types";

const coleccion = collection(db, 'productos');

export const getProductos = async (): Promise<Producto[]> => {
    try {
        const datos = await getDocs(coleccion);
        
        const listaProductos = datos.docs.map(prod => ({id: prod.id, ...prod.data()})) as Producto[]; 
        return listaProductos;

    } catch(error) {
        console.log('Ha ocurrido un error', error);
        throw error;
    }
}

// Usamos Omit<Producto, 'id'> porque el ID lo crea Firebase
export const anadirProducto = async (nuevoProducto: Omit<Producto, 'id'>): Promise<Producto> => {
    try {
        const docRef = await addDoc(coleccion, nuevoProducto);

        return {id: docRef.id, ...nuevoProducto} as Producto;

    } catch (error) {
        console.log('Hubo un error a la hora de añadir el Producto', error);
        throw error;
    }
}

export const eliminarProducto = async (id: string): Promise<void> => {
    try {
        const docRef = doc(db, 'productos', id);
        await deleteDoc(docRef);
        console.log('Producto eliminado correctamente');
      alert('¡Producto eliminado con éxito!');
      alert('Vuelva a cargar los productos para ver los cambios');

    } catch(error) {
        console.log('Hubo un error a la hora de eliminar el Producto', error);
        throw error;
    }
}