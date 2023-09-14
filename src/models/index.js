// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Person, Note } = initSchema(schema);

export {
  Person,
  Note
};