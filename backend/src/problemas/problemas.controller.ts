import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProblemasService } from './problemas.service';
import { Problemas } from './problema.entity';

@Controller('problemas')
export class ProblemasController {
    constructor(private readonly problemasService: ProblemasService) {}

    @Get()
    async listarProblemas(): Promise<Problemas[]> {
        return this.problemasService.findAll();
    }
}

