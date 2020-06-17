import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('prefixo') // /
export class AppController {

  constructor(
      private readonly appService: AppService,
  ) {}



  @Get() // /prefixo
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('teste')
  acao(){
    return 'Full Cycle';
  }

}
