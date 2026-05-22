import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { DatabaseModule } from '../database/database.module';
import { categoriasProviders } from './categorias.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...categoriasProviders,
    CategoriasService
  ],
  controllers: [CategoriasController]
})
export class CategoriasModule {}


