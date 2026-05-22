import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Problema } from './problema.entity';

@Injectable()
export class ProblemasService {
  constructor(
    @Inject('PROBLEMA_REPOSITORY')
    private problemaRepository: Repository<Problema>,
  ) {}

  async findAll(): Promise<Problema[]> {
    return this.problemaRepository.find();
  }
}


