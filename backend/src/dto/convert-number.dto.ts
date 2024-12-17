import { z } from 'zod';

export const ConvertNumberSchema = z.object({
  number: z
    .number({
      required_error: 'Number is required',
      invalid_type_error: 'Number must be an integer',
    })
    .int('Number must be an integer')
    .positive('Number must be a positive value')
    .max(1e15, 'Number exceeds the allowed limit of quadrillions'), // Máximo hasta un cuadrillón
});

// Tipo inferido para usar en el controlador
export type ConvertNumberDto = z.infer<typeof ConvertNumberSchema>;
