import { Controller, Get } from '@nestjs/common';
import { ProblemasService } from './problemas.service';

@Controller('problemas')
export class ProblemasController {
    constructor(private readonly problemasService: ProblemasService) { }

    @Get()
    listarProblemas() {
        return this.problemasService.listarProblemas();
    }
}
