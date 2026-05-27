import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Problemas } from './problema.entity';
import { CriarProblemaDto } from './dto/criarproblema.dto';

@Injectable()
export class ProblemasService {
  constructor(
    @Inject('PROBLEMAS_REPOSITORY')
    private problemasRepository: Repository<Problemas>,
  ) {}

  async findAll(): Promise<Problemas[]> {
    return this.problemasRepository.find();
  }

  async create(criarProblemaDto: CriarProblemaDto): Promise<Problemas> {
    const novoProblema = this.problemasRepository.create(
      {
        problem_title: criarProblemaDto.problem_title,
        user: { id: criarProblemaDto.user_id },
        problem_gravity: criarProblemaDto.problem_gravity,
        problem_latitude: criarProblemaDto.problem_latitude,
        problem_longituded: criarProblemaDto.problem_longituded,
        category: { id: criarProblemaDto.categories_id },
      }
    );
    // console.log('Novo problema criado:', novoProblema);
    return this.problemasRepository.save(novoProblema);
  }

}


