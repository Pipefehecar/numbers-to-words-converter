import { Body, Controller, Get, Post } from '@nestjs/common';
import { NumberService } from '../services/number.service';

@Controller('number')
export class NumberController {
  constructor(private readonly numberService: NumberService) {}

  @Post('convert')
  async convertToWords(
    @Body('number') value: string,
  ): Promise<{ words: string }> {
    const number = parseInt(value, 10);
    if (isNaN(number)) {
      throw new Error('Invalid number format.');
    }

    const words = await this.numberService.convertNumberToWords(number);
    return { words };
  }

  @Get('conversions')
  async getConversions(): Promise<{ conversions: number }> {
    //   const conversions = await this.numberService.getConversions();
    //fake data
    const conversions = 0;
    return { conversions };
  }
}
