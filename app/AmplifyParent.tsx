'use client';

import { Amplify } from 'aws-amplify';
import config from '../src/amplifyconfiguration.json';

Amplify.configure(config);
//@ts-ignore
const AmplifyParent = ({ children }) => children;

export default AmplifyParent;
