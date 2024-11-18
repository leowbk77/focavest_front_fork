import { Flex } from '@mantine/core';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { ExamsSelected } from './components/ExamsSelected';
import { NextExam } from './components/NextExam';
import { ProfileInfo } from './components/ProfileInfo';

export function Profile() {
  return (
    <>
      <Flex direction="column" w="100vw" align="center" m="auto" p="xl">
        <Header />
        <Flex direction="column" w="100%" pos="relative" pb={70}>
          <ProfileInfo />
          <NextExam />
          <ExamsSelected />
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
