import { Carousel, CarouselSlide,CarouselProps } from '@mantine/carousel';
import { Flex, Text, Title } from '@mantine/core';

interface Props {
    name: string;
    hours: string;
}

export function Task({name, hours}: Props) {
  return (
    <>
      <Flex direction={'column'} align={'start'} w={60} h={60} bg={'white'} p={'sm'} justify={'space-around'}>
        <Text size='10px' c={'#616E7D'}>{name}</Text>
        <Text size='8px' c={'#616E7D'}>{hours}</Text>
      </Flex>
    </>
  );
}
