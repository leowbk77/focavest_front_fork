import { IconFilter, IconSearch } from '@tabler/icons-react';
import { ActionIcon, Flex, Input } from '@mantine/core';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Updates } from './components/Updates/Updates';

export function Forum() {
  return (
    <>
      <Flex direction="column" w="100vw" align="center" m="auto" p="xl">
        <Header />
        <Flex direction="column" pos="relative" pb={70}>
          <Flex w="100%" justify="space-between" align="center">
            <Input
              w="80%"
              placeholder="Pesquise o assunto desejado"
              leftSection={
                <ActionIcon variant="filled" color="#82BFAB" aria-label="Start">
                  <IconSearch />
                </ActionIcon>
              }
            />
            <ActionIcon variant="filled" color="#82BFAB" aria-label="Start">
              <IconFilter />
            </ActionIcon>
          </Flex>
          <Updates />
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
