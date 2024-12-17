import { Test, TestingModule } from '@nestjs/testing';
import { NumberService } from '../../src/services/number.service';
import { SoapProvider } from '../../src/providers/soap/soap.provider';
import { ConfigService } from '@nestjs/config';
import { ConversionRepository } from '../../src/repositories/conversion.repository';

// Mock soap library
jest.mock('soap', () => ({
  createClientAsync: jest.fn().mockResolvedValue({
    NumberToWordsAsync: jest
      .fn()
      .mockResolvedValue([{ NumberToWordsResult: 'one hundred twenty-three' }]),
  }),
}));

describe('NumberService Integration', () => {
  let service: NumberService;

  beforeEach(async () => {
    // Mock ConfigService
    const mockConfigService = {
      get: jest.fn((key: string) => {
        if (key === 'providers') {
          return { soap: { wsdlUrl: 'http://mock-wsdl-url' } };
        }
        return undefined;
      }),
    };

    // Mock ConversionRepository
    const mockConversionRepository = {
      createConversion: jest.fn().mockResolvedValue({
        id: 1,
        number: 123,
        words: 'one hundred twenty-three',
      }),
      getLastFiveConversions: jest.fn().mockResolvedValue([]),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NumberService,
        SoapProvider,
        { provide: ConfigService, useValue: mockConfigService }, // Mock del ConfigService
        { provide: ConversionRepository, useValue: mockConversionRepository }, // Mock del repositorio
      ],
    }).compile();

    service = module.get<NumberService>(NumberService);
  });

  it('should integrate SOAP provider and save the conversion', async () => {
    const result = await service.convertNumberToWords(123);
    expect(result).toEqual({
      id: 1,
      number: 123,
      words: 'one hundred twenty-three',
    });
  }, 10000); // Timeout de 10 segundos
});
