import { Flex } from '@mantine/core';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { DailyActivities } from './components/DailyActivities/DailyActivities';
import { NextExams } from './components/NextExams/NextExams';
import { Updates } from './components/Updates/Updates';

export function Home() {
  return (
    <>
      <Flex direction="column" w="100vw" align="center" m="auto" p="xl">
        <Header />
        <Flex direction="column" w="100%" pos="relative" pb={70}>
          <DailyActivities />
          <NextExams />
          <Updates />
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
