import { Injectable } from '@nestjs/common';
import { Client, createClientAsync } from 'soap';

@Injectable()
export class SoapProvider {
  private client: Client;

  private readonly wsdlUrl =
    'https://www.dataaccess.com/webservicesserver/NumberConversion.wso?WSDL';

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
