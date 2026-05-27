import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProblemasService } from './problemas.service';
import { Problemas } from './problema.entity';
import { CriarProblemaDto } from './dto/criarproblema.dto';

@Controller('problemas')
export class ProblemasController {
    constructor(private readonly problemasService: ProblemasService) {}

    @Get()
    async listarProblemas(): Promise<Problemas[]> {
        return this.problemasService.findAll();
    }

    @Post()
    async criarProblema(@Body() criarProblemaDto: CriarProblemaDto): Promise<Problemas> {
        return this.problemasService.create(criarProblemaDto);
    }
}

