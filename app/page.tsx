'use client';

import { useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';

import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { listCalegs } from '@/src/graphql/queries';

const client = generateClient();
export default function HomePage() {
  useEffect(() => {
    client.graphql({
      query: listCalegs,
    }).then(x => {
      console.log(x);
    });
  }, []);
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
