
import { DataSource } from 'typeorm';
import { Categorias } from './categorias.entity';

export const categoriasProviders = [
  {
    provide: 'CATEGORIAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Categorias),
    inject: ['DATA_SOURCE'],
  },
];
