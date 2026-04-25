import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db.tiinhdeorwhhxymrjoln.supabase.co',
      port: 5432,
      username: 'postgres',
      password: '8W,zx7?7NXBi3qG',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Use migrations em produção!
      ssl: true, // Supabase exige SSL
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
