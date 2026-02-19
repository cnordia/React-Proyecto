//Aquí definiremos la Interface

export type CategoriaElectronica = "Portátiles" | "Móviles" | "Televisores" | "Gaming" | "Tablets" | "Periféricos";

export interface Producto{
    nombre: string;
    precio: number;
    categoria: CategoriaElectronica;
    estado: "pendiente" | "enviado" | "entregado";
}

