import request from 'supertest';
import app from '../src/app';

describe('Tests the API Ready Endpoint', () => {
  it('Should return a 200 OK', async () => {
    const resp = await request(app).get('/api/health');

    expect(resp.status).toBe(200);
    expect(resp.text).toEqual('healthy');
  });
});
