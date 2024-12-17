import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Conversion } from '../models/conversion.model';

@Injectable()
export class ConversionRepository {
  constructor(
    @InjectModel(Conversion)
    private readonly conversionModel: typeof Conversion,
  ) {}

  async getLastFiveConversions(): Promise<Conversion[]> {
    return this.conversionModel.findAll({
      order: [['created_at', 'DESC']],
      limit: 5,
    });
  }

  async createConversion(number: number, words: string): Promise<Conversion> {
    return this.conversionModel.create({ number, words });
  }
}
