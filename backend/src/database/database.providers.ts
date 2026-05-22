import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db.tiinhdeorwhhxymrjoln.supabase.co',
        port: 5432,
        username: 'postgres',
        password: 'SdkrlDHQHWCF',
        database: 'postgres',
        ssl: {
          rejectUnauthorized: false,
        },
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

