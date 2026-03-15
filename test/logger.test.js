const assert = require('assert');
const logger = require('../src/logger');

describe('Logger', function () {

  it('logger pitäisi olla olemassa', function () {
    assert.ok(logger);
  });

  it('loggerilla pitäisi olla info-taso', function () {
    assert.strictEqual(logger.level, 'info');
  });

  it('loggerilla pitäisi olla 3 transportia', function () {
    assert.strictEqual(logger.transports.length, 3);
  });

});