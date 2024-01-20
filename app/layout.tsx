import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, Container, Stack } from '@mantine/core';

import { Metadata } from 'next';
import { theme } from '../theme';
import AmplifyParent from './AmplifyParent';
import QueryProvider from './QueryProvider';
import Header from './Header';

export const metadata:Metadata = {
  title: 'Daftar Calon Legislatif (CALEG)',
  description: 'Daftar Calon Legislatif 2024',
};
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta name="google-site-verification" content="o9PNSnEBMCuHFw8gmRMlawng1UjsFiGCKRVYXi_C9mg" />
      </head>
      <body>
        <AmplifyParent>
          <QueryProvider>
            <MantineProvider defaultColorScheme="dark" theme={theme}>
              <Container mt="xl">
                <Stack>
                  <Header />
                  {children}
                </Stack>
              </Container>
            </MantineProvider>
          </QueryProvider>
        </AmplifyParent>
      </body>
    </html>
  );
}
