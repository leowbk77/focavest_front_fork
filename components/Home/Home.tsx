import { Flex } from '@mantine/core';
import { DailyActivities } from './components/DailyActivities/DailyActivities';

export function Home() {
  return (
    <>
      <Flex direction={'column'}
      w={390}
      h={844}
      align={'center'}
      m={'auto'}
      p={'xl'}
      >
        <DailyActivities />
      </Flex>
    </>
  );
}
