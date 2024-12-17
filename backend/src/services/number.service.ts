import { Injectable } from '@nestjs/common';
import { SoapProvider } from '../providers/soap/soap.provider';
import { Conversion } from '../models/conversion.model';
import { ConversionRepository } from '../repositories/conversion.repository';

@Injectable()
export class NumberService {
  constructor(
    private readonly soapProvider: SoapProvider,
    private readonly conversionRepository: ConversionRepository,
  ) {}

  async convertNumberToWords(number: number): Promise<Conversion> {
    if (number < 0) throw new Error('Only positive numbers are supported.');

    const words = await this.soapProvider.numberToWords(number);

    // Save the conversion to the database
    return this.conversionRepository.createConversion(number, words);
  }

  async getLastConversions(): Promise<Conversion[]> {
    return this.conversionRepository.getLastFiveConversions();
  }
}
