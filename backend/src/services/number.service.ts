import { Injectable } from '@nestjs/common';
import { SoapProvider } from '../providers/soap/soap.provider';

@Injectable()
export class NumberService {
  constructor(private readonly soapProvider: SoapProvider) {}

  async convertNumberToWords(number: number): Promise<string> {
    // validates the input before sending it to the SOAP provider
    if (number < 0) {
      throw new Error('Only positive numbers are supported.');
    }
    return this.soapProvider.numberToWords(number);
  }
}
