import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, Container, Stack } from '@mantine/core';

import { theme } from '../theme';
import AmplifyParent from './AmplifyParent';
import QueryProvider from './QueryProvider';
import Header from './Header';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
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
      </head>
      <body>
        <AmplifyParent>
          <QueryProvider>
            <MantineProvider theme={theme}>
              <Container>
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
