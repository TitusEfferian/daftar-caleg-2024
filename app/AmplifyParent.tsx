'use client';

import { Amplify } from 'aws-amplify';
import { DataStore } from 'aws-amplify/datastore';

import config from '../src/amplifyconfiguration.json';

Amplify.configure(config);
DataStore.configure({
  maxRecordsToSync: 11000,
});
//@ts-ignore
const AmplifyParent = ({ children }) => children;

export default AmplifyParent;
