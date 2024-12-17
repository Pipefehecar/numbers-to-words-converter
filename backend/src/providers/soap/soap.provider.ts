import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, createClientAsync } from 'soap';

@Injectable()
export class SoapProvider {
  private client: Client;
  private readonly wsdlUrl: string;

  constructor(private configService: ConfigService) {
    const { soap } = this.configService.get('providers');
    console.log("soap");
    this.wsdlUrl = soap.wsdlUrl;
    if (!this.wsdlUrl) {
      throw new Error('SOAP WSDL URL is required');
    }
  }

  async initializeClient(): Promise<void> {
    this.client = await createClientAsync(this.wsdlUrl);
  }

  async numberToWords(number: number): Promise<string> {
    if (!this.client) {
      await this.initializeClient();
    }
    const [result] = await this.client.NumberToWordsAsync({ ubiNum: number });
    return result.NumberToWordsResult;
  }
}
