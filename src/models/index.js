// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Dapil, CalonLegislatif } = initSchema(schema);

export {
  Dapil,
  CalonLegislatif
};