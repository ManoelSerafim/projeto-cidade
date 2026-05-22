
import { DataSource } from 'typeorm';
import { Problema } from './problema.entity';

export const problemaProviders = [
  {
    provide: 'PROBLEMA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Problema),
    inject: ['DATA_SOURCE'],
  },
];
