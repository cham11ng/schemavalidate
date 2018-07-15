import { ObjectField, StringField } from '../src';

test('should return true', () => {
  schema = new ObjectField({
    name: new StringField({ nullable: true })
  });

  payload = {
    name: 'John Doe'
  };
  expect(schema.validate(payload)).toBe(payload);
});
