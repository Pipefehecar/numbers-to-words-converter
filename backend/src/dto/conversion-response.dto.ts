import { ApiProperty } from '@nestjs/swagger';

export class ConversionResponseDto {
  @ApiProperty({ description: 'ID de la conversión', example: 1 })
  id: number;

  @ApiProperty({ description: 'Número ingresado', example: 123 })
  number: number;

  @ApiProperty({
    description: 'Número convertido a palabras',
    example: 'one hundred twenty-three',
  })
  words: string;
}
