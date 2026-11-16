// products.test.js
// Tests for the GET /foods endpoint
const request = require('supertest');
const app = require('../server/server');

describe('GET /foods', () => {
  test('returns 200 and five food items', async () => {
    const res = await request(app).get('/foods');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(5);
  });

  test('returns 404 for an unknown route', async () => {
    const res = await request(app).get('/nothing');
    expect(res.statusCode).toBe(404);
  });
});
