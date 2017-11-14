import { agent } from 'supertest';
import { createApp } from '../../src/config/createApp';
import * as should from 'should';

describe('test hello world', () => {

  it('should return 200', async () => {
    await agent(createApp().listen())
      .get('/')
      .expect(200)
      .then(res => {
        should(res.text).be.equal('hello world');
      });
  });
});
