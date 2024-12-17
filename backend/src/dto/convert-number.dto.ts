import { ApiProperty } from '@nestjs/swagger';
import { z } from 'zod';

export const ConvertNumberSchema = z.object({
  number: z
    .number({
      required_error: 'Number is required',
      invalid_type_error: 'Number must be an integer',
    })
    .int('Number must be an integer')
    .positive('Number must be a positive value')
    .max(1e15, 'Number exceeds the allowed limit of quadrillions'),
});

export class ConvertNumberDto {
  @ApiProperty({
    description: 'Número que se desea convertir a palabras',
    example: 12345,
    minimum: 1,
    maximum: 1e15,
  })
  number: number;
}

export class ConvertNumberResponseDto {
  @ApiProperty({ description: 'ID de la conversión', example: 1 })
  id: number;

  @ApiProperty({
    description: 'Número ingresado por el usuario',
    example: 12345,
  })
  number: number;

  @ApiProperty({
    description: 'Número convertido a palabras',
    example: 'twelve thousand three hundred forty-five',
  })
  words: string;
}
