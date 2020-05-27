const logger = require('./attempt-01');

test('Should log "foo" at timestampe 1s', () => {
   expect(logger.shouldPrintMessage(1, "foo")).toEqual(true);
});

test('Should log "bar" at timestampe 2s', () => {
   expect(logger.shouldPrintMessage(2, "bar")).toEqual(true);
});

test('Should not log "foo" at timestampe 3s', () => {
   expect(logger.shouldPrintMessage(3, "foo")).toEqual(false);
});

test('Should not log "bar" at timestampe 8s', () => {
   expect(logger.shouldPrintMessage(8, "bar")).toEqual(false);
});

test('Should not log "foo" at timestampe 10s', () => {
   expect(logger.shouldPrintMessage(10, "foo")).toEqual(false);
});

test('Should log "foo" at timestampe 11s', () => {
   expect(logger.shouldPrintMessage(11, "foo")).toEqual(true);
});