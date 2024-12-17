import { SoapProvider } from '../../src/providers/soap/soap.provider';
import { ConfigService } from '@nestjs/config';

describe('SoapProvider', () => {
  let soapProvider: SoapProvider;
  let mockConfigService: Partial<ConfigService>;

  beforeEach(() => {
    // ConfigService simula que siempre retorna un objeto con la estructura esperada
    mockConfigService = {
      get: jest.fn().mockImplementation((key: string) => {
        if (key === 'providers') {
          return { soap: { wsdlUrl: 'http://mock-wsdl-url' } };
        }
        return undefined;
      }),
    };

    soapProvider = new SoapProvider(mockConfigService as ConfigService);
  });

  it('should throw an error if WSDL URL is not provided', () => {
    // Simula que 'providers' devuelve un objeto sin la propiedad 'soap'
    (mockConfigService.get as jest.Mock).mockReturnValue({});

    expect(
      () => new SoapProvider(mockConfigService as ConfigService),
    ).toThrowError('SOAP WSDL URL is required');
  });

  it('should initialize the client and return words', async () => {
    // Mock de la inicialización del cliente y de numberToWords
    jest.spyOn(soapProvider, 'initializeClient').mockResolvedValue();
    jest
      .spyOn(soapProvider, 'numberToWords')
      .mockResolvedValue('one hundred twenty-three');

    const result = await soapProvider.numberToWords(123);
    expect(result).toBe('one hundred twenty-three');
  });
});
