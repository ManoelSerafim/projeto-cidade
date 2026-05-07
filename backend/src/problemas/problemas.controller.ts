import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProblemasService, SalvarProblemaDto } from './problemas.service';

@Controller('problemas')
export class ProblemasController {
    constructor(private readonly problemasService: ProblemasService) {}

    @Get()
    listarProblemas() {
        return this.problemasService.listarProblemas();
    }

    @Post()
    salvarProblema(@Body() dados: SalvarProblemaDto) {
        return this.problemasService.salvarProblema(dados);
    }
}

