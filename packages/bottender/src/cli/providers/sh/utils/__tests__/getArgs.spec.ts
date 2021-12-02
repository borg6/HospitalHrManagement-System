import getArgs from '../getArgs';

it('should be defined', () => {
  expect(getArgs).toBeDefined();
});

it('should parse args as expect', () => {
  const args = ['messenger', 'profile', 'set', '--forc