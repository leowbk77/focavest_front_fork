import { Flex, Text } from '@mantine/core';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export function Calendar() {
  return (
    <>
      <Flex direction="column" w={390} align="center" m="auto" p="xl">
        <Header />
        <Flex>
            <Text>
                Calendário
            </Text>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
