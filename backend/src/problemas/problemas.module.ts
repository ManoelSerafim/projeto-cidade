import { Module } from '@nestjs/common';
import { ProblemasService } from './problemas.service';
import { ProblemasController } from './problemas.controller';
import { DatabaseModule } from '../database/database.module';
import { problemaProviders } from './problema.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...problemaProviders,
    ProblemasService
  ],
  controllers: [ProblemasController]
})
export class ProblemasModule {}


