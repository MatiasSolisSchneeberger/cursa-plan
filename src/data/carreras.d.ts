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
    cuatri: number;
    materias: Array<materia>;
}

interface materia {
    materia: string;
    codigo: string;
    paraCursar: Array<string>;
    paraRendir: Array<string>;
    planDeEstudio: string;
    mesas: Array<mesa>;
}

interface mesa{
    dia: number;
    mes: number;
    año: number;
}