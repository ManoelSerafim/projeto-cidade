import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProblemasModule } from './problemas/problemas.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
  imports: [ProblemasModule, TypeOrmModule.forRoot({
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
    }), ],
  controllers: [],
  providers: [],
})
export class AppModule {}
