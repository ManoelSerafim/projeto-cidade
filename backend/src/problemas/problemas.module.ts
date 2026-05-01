import { Module } from '@nestjs/common';
import { ProblemasService } from './problemas.service';
import { ProblemasController } from './problemas.controller';

@Module({
  providers: [ProblemasService],
  controllers: [ProblemasController]
})
export class ProblemasModule {}
