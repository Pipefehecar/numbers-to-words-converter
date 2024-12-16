import { config } from 'dotenv';
import { join } from 'path';

config({ path: join(__dirname, '../../.env') });

export const configuration = () => ({
  port: parseInt(process.env.PORT || '3000', 10),
  providers: {
    soap: {
      wsdlUrl: process.env.SOAP_WSDL_URL,
    },
  },
  postgres: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  stage: process.env.STAGE,
});
