import { Module } from '@nestjs/common';
import { ProblemasModule } from './problemas/problemas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [ProblemasModule, UsuariosModule, CategoriasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
