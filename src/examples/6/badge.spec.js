import badge from './badge'

test('Create badge by uppercasing name and surrounding it with asterisks', () => {
  expect(badge('hello world')).toBe('*** HELLO WORLD ***')
})