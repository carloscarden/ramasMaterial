export interface MateriasElement {
    idMateria: number;
    nombreMateria: string;
    nombreAnio: string;
    orden: number;
    nota: string;
    idCondicion?: any;
    idMes?: any;
    idAnio?: any;
    idEstablecimiento?: any;
    idAnalitico: number;
    isGroupBy: boolean;
}
export interface GroupBy {
    nombreAnio: string;
    isGroupBy: boolean;
    expanded: boolean;
}

export const MATERIAS_DATA: (MateriasElement | GroupBy)[] = [
];

