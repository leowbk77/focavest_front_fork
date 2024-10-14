import { Box, Flex, Text } from '@mantine/core';

export function Profile() {
  return (
    <>
      <Flex w={'100%'} direction={'row'} justify={'start'} align={'center'} pos={'relative'}>
        <Box w={54} h={54} bg={'#D9D9D9'} style={{ borderRadius: 10 }} />
        <Flex direction={'column'} p={'sm'}>
          <Text size="14px" c={'#616E7D'} ff={'monospace'} fw={'bold'}>
            @faculdade
          </Text>
          <Text size="10px" c={'#616E7D'} ff={'monospace'} pt={'sm'}>
            Uberlândia - MG
          </Text>
        </Flex>
        <Text
          size="10px"
          c={'#A6ADB5'}
          ff={'monospace'}
          pt={'sm'}
          right={0}
          bottom={15}
          pos={'absolute'}
        >
          22/09/2024
        </Text>
      </Flex>
      <Text size='12px' p={'sm'} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget tempus libero. Fusce
        faucibus a felis ac euismod. Mauris facilisis a elit et cursus
      </Text>
      
    </>
  );
}
