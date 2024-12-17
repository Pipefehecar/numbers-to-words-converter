import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { NumberService } from '../services/number.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  ConvertNumberDto,
  ConvertNumberResponseDto,
  ConvertNumberSchema,
} from '../dto/convert-number.dto';
import { ConversionResponseDto } from '../dto/conversion-response.dto';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe';

@Controller()
@ApiTags('convert') // Agrupar endpoints en Swagger
export class NumberController {
  constructor(private readonly numberService: NumberService) {}

  @Post('convert')
  @ApiOperation({ summary: 'Convertir un número a palabras' })
  @ApiResponse({
    status: 201,
    description: 'Número convertido exitosamente.',
    type: ConvertNumberResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Número inválido.' })
  @UsePipes(new ZodValidationPipe(ConvertNumberSchema))
  async convertNumber(
    @Body() body: ConvertNumberDto,
  ): Promise<ConvertNumberResponseDto> {
    const result = await this.numberService.convertNumberToWords(body.number);
    return { id: result.id, number: result.number, words: result.words };
  }

  @Get('conversions')
  @ApiOperation({ summary: 'Obtener las últimas 5 conversiones' })
  @ApiResponse({
    status: 200,
    description: 'Lista de conversiones obtenida correctamente.',
    type: [ConversionResponseDto],
  })
  async getLastConversions(): Promise<ConversionResponseDto[]> {
    return await this.numberService.getLastConversions();
  }
}
