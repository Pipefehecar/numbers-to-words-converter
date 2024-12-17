import { NumberService } from '../../src/services/number.service';
import { SoapProvider } from '../../src/providers/soap/soap.provider';
import { ConversionRepository } from '../../src/repositories/conversion.repository';

describe('NumberService', () => {
  let numberService: NumberService;
  let soapProvider: SoapProvider;
  let conversionRepository: ConversionRepository;

  beforeEach(() => {
    soapProvider = {
      numberToWords: jest.fn().mockResolvedValue('one hundred twenty-three'),
    } as any;
    conversionRepository = {
      createConversion: jest.fn().mockResolvedValue({
        id: 1,
        number: 123,
        words: 'one hundred twenty-three',
      }),
      getLastFiveConversions: jest.fn().mockResolvedValue([]),
    } as any;

    numberService = new NumberService(soapProvider, conversionRepository);
  });

  it('should convert a number to words and save to the database', async () => {
    const result = await numberService.convertNumberToWords(123);

    expect(soapProvider.numberToWords).toHaveBeenCalledWith(123);
    expect(conversionRepository.createConversion).toHaveBeenCalledWith(
      123,
      'one hundred twenty-three',
    );
    expect(result).toEqual({
      id: 1,
      number: 123,
      words: 'one hundred twenty-three',
    });
  });

  it('should return the last 5 conversions', async () => {
    const result = await numberService.getLastConversions();
    expect(conversionRepository.getLastFiveConversions).toHaveBeenCalled();
    expect(result).toEqual([]);
  });
});
