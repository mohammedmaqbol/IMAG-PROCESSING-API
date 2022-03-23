import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test sever', () => {
    it('Get the / endpoint', async () => {
        const response = await request.get('/');
        expect(response.statusCode).toBe(200);
    });
});
