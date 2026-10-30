export type EstadoProyecto = 'en progreso' | 'completado' | 'pendiente';
export interface Proyecto {
    id: number;
    nombre: string;
    estado: EstadoProyecto;
}
