import { Flex } from '@mantine/core';
import { DailyActivities } from './components/DailyActivities/DailyActivities';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { NextExams } from './components/NextExams/NextExams';
import { Updates } from './components/Updates/Updates';

export function Home() {
  return (
    <>
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
        <DailyActivities />
        <NextExams />
        <Updates />
        <Footer />
      </Flex>
    </>
  );
}
