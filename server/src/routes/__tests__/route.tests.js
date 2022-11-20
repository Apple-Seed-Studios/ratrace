const routes = require('../route');

const json = jest.fn();
const status = jest.fn(() => { return {json} });

describe('Hello World Route', () => {
  test('should return hello', () => {
    const res = {
      status,
    };
    routes.handleHelloWorld(null, res);
    expect(json).toHaveBeenCalledWith(expect.objectContaining({'message': 'hello'}));
  });
});
