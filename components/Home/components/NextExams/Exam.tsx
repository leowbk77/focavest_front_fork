import { Flex, Text } from '@mantine/core';

interface Props {
  name: string;
}

export function Exam({ name }: Props) {
  return (
    <>
      <Flex direction={'column'} align={'center'}>
        <img src="calendar.svg" alt="Calendar" />
        <Text>{name}</Text>
        <img src="bottom-arrow.svg" alt="More" />
      </Flex>
    </>
  );
}
