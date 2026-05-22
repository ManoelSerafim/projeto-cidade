import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { DatabaseModule } from '../database/database.module';
import { usuariosProviders } from './usuarios.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...usuariosProviders,
    UsuariosService
  ],
  controllers: [UsuariosController]
})
export class UsuariosModule {}


