import { Flex, Text } from '@mantine/core';

interface Props {
  name: string;
  hours: string;
}

export function Task({ name, hours }: Props) {
  return (
    <>
      <Flex direction="column" align="start" w={60} h={60} bg="white" p="sm" justify="space-around">
        <Text size="10px" c="#82BFAB">
          {name}
        </Text>
        <Text size="8px" c="#82BFAB">
          {hours}
        </Text>
      </Flex>
    </>
  );
}
