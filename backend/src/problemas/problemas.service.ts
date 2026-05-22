import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Problemas } from './problema.entity';

@Injectable()
export class ProblemasService {
  constructor(
    @Inject('PROBLEMAS_REPOSITORY')
    private problemasRepository: Repository<Problemas>,
  ) {}

  async findAll(): Promise<Problemas[]> {
    return this.problemasRepository.find();
  }


}


