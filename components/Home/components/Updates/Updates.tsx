import { Flex, Text, Title } from '@mantine/core';
import { Profile } from './Profile';

export function Updates() {
  return (
    <>
      <Flex direction={'row'} w={'100%'} pb={'md'}>
        <Title size={16} c={'#616E7D'} ff={'monospace'}>
          Atualizações_________________________
        </Title>
      </Flex>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </>
  );
}
