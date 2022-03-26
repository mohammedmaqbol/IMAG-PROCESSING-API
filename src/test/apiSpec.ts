import supertest from 'supertest';
import route from '../index';

const request = supertest(route);

describe('Test Route', () => {
      it('it should response image node exist ', async () => {
            const response = await request.get('/images');
            expect(response.statusCode).toBe(404);
      });
});

describe('GET /images endpoint', () => {
      it('it should response Make Sure Width And Height Are Number ', async () => {
            const response = await request.get(
                  '/images?name=img1&width=&height=200'
            );
            expect(response.statusCode).toBe(404);
      });

      it('it should response Make Sure Width And Height Are Number  ', async () => {
            const response = await request.get(
                  '/images?name=img1&width=200&height='
            );
            expect(response.statusCode).toBe(404);
      });
});

describe('Test Resize processing', () => {
      it('it should response 200 ', async () => {
            const response = await request.get(
                  '/images?name=img1&width=200&height=200'
            );
            expect(response.statusCode).toBe(200);
      });
});
