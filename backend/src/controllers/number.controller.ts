import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { NumberService } from '../services/number.service';
import { Conversion } from '../models/conversion.model';
import {
  ConvertNumberSchema,
  ConvertNumberDto,
} from '../dto/convert-number.dto';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';

@Controller()
export class NumberController {
  constructor(private readonly numberService: NumberService) {}

  @Post('convert')
  @UsePipes(new ZodValidationPipe(ConvertNumberSchema))
  async convertNumber(
    @Body() body: ConvertNumberDto,
  ): Promise<{ id: number; number: number; words: string }> {
    const result = await this.numberService.convertNumberToWords(body.number);
    return { id: result.id, number: result.number, words: result.words };
  }

  @Get('/conversions')
  async getLastConversions(): Promise<Conversion[]> {
    return await this.numberService.getLastConversions();
  }
}
