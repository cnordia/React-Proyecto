//Aquí definiremos la Interface

export type CategoriaElectronica = "Portátiles" | "Móviles" | "Televisores" | "Gaming" | "Tablets" | "Periféricos";

export interface Producto{
    id: string
    nombre: string;
    precio: number;
    categoria: CategoriaElectronica;
    estado: "nuevo" | "segundaMano";
}

