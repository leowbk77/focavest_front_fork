import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import React from 'react';
import { Flex, ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';

import { Footer } from '@/components/Home/components/Footer/Footer';
import { Header } from '@/components/Home/components/Header/Header';

export const metadata = {
  title: 'FocaVest',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="pt-br">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/focavest.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Flex
            direction={'column'}
            w={390}
            h={'100vh'}
            align={'center'}
            m={'auto'}
            p={'xl'}
            pos={'relative'}
          >
            <Header />
            
            {children}

            <Footer />
          </Flex>

        </MantineProvider>
      </body>
    </html>
  );
}
