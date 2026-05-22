import { Module } from '@nestjs/common';
import { ProblemasService } from './problemas.service';
import { ProblemasController } from './problemas.controller';
import { DatabaseModule } from '../database/database.module';
import { problemasProviders } from './problemas.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...problemasProviders,
    ProblemasService
  ],
  controllers: [ProblemasController]
})
export class ProblemasModule {}


