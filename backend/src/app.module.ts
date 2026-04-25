import { Module } from '@nestjs/common';
import { ProblemasModule } from './problemas/problemas.module';

@Module({
  imports: [ProblemasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
