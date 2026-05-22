
import { DataSource } from 'typeorm';
import { Problemas } from './problema.entity';

export const problemasProviders = [
  {
    provide: 'PROBLEMAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Problemas),
    inject: ['DATA_SOURCE'],
  },
];
