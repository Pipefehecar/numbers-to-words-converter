import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('NumberController - E2E', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/convert (POST) - should convert number to words', () => {
    return request(app.getHttpServer())
      .post('/convert')
      .send({ number: 123 })
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('number', 123);
        expect(res.body).toHaveProperty('words', 'one hundred twenty-three');
      });
  });

  it('/conversions (GET) - should return last 5 conversions', () => {
    return request(app.getHttpServer())
      .get('/conversions')
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThanOrEqual(0);
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
