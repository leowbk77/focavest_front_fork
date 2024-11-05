import Image from 'next/image';
import { Flex, Text } from '@mantine/core';

interface Props {
  name: string;
}

export function Exam({ name }: Props) {
  return (
    <>
      <Flex direction="column" align="center">
        <Image src="calendar.svg" width={60} height={60} alt="Calendar" />
        <Text>{name}</Text>
        <Image src="bottom-arrow.svg" width={12} height={6} alt="More" />
      </Flex>
    </>
  );
}
