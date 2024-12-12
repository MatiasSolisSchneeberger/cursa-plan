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
    materias: Array<materia>;
}

interface materia {
    materia: string;
    codigo: string;
    paraCursar: Array<condicion> | null;
    paraRendir: Array<condicion> | null;
    planDeEstudio: string;
    mesas: Array<mesa> | null;
}

interface condicion{
	mat: string
	cond: "R" | "A" | null,
}

interface mesa {
    fecha: Date;
}