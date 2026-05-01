import { Injectable } from '@nestjs/common';

type Problema = {
    id: number;
    titulo: string;
    gravidade: 'leve' | 'moderada' | 'grave';
    latitude: number;
    longitude: number;
}

@Injectable()
export class ProblemasService {

    private problemas: Problema[] = [{
    id: 1,
    titulo: 'Buraco na Rua A',
    gravidade: 'moderada',
    latitude: -23.55052,
    longitude: -46.633308
    }];

    listarProblemas() {
        return this.problemas;
    }
}
