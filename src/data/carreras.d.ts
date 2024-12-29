export interface carreras {
    carreras: Array<carrera>;
}

interface carrera {
    carrera: string;
    emoji: string;
    cursada: Array<cursada>;
}

interface cursada {
    año: number;
    materias?: Array<materia>;
    orientaciones?: Array<orientacion>;
}

interface materia {
    materia: string;
    codigo: number;
    paraCursar: Array<condicion> | null;
    paraRendir: Array<condicion> | null;
    planDeEstudio: string | null;
    mesas: Array<mesa> | null;
}

export interface orientacion {
    nombre: string;
    materias: Array<materia>;
}

interface condicion {
    mat: string
    cond: "R" | "A" | null, // "R" = Regular, "A" = Aprobada
}

interface mesa {
    fecha: Date;
}