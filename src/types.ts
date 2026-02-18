//Aquí definiremos la Interface


//El objeto principal debe tener al menos 4 atributos (sin contar el ID automático).
//Debes incluir variedad de tipos de datos: obligatoriamente al menos un string, un number y 
// un campo para selección cerrada/categoría (tipo union o enum).

type EstadoPedido = "pendiente" | "enviado" | "entregado";


interface User {
    name: string;
    email: string;
    estado: EstadoPedido;
}