import { Flex } from '@mantine/core';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { MoreColleges } from './components/MoreColleges';
import { Vest } from './components/Vest';

export function Exam() {
  return (
    <>
      <Flex direction="column" w={390} align="center" m="auto" p="xl">
        <Header />
        <Flex direction="column" pos="relative" pb={70}>
          <Vest />
          <MoreColleges />
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
