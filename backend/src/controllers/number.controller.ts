import { Body, Controller, Get, Post } from '@nestjs/common';
import { NumberService } from '../services/number.service';
import { Conversion } from '../models/conversion.model';

@Controller()
export class NumberController {
  constructor(private readonly numberService: NumberService) {}

  @Post('convert')
  async convertNumber(
    @Body('number') number: number,
  ): Promise<{ id: number; number: number; words: string }> {
    const result = await this.numberService.convertNumberToWords(number);
    return { id: result.id, number: result.number, words: result.words };
  }

  @Get('/conversions')
  async getLastConversions(): Promise<Conversion[]> {
    return await this.numberService.getLastConversions();
  }
}
