import { Flex, Text, Title } from '@mantine/core';
import { CarouselComponent } from './Carousel';

export function NextExams() {
  return (
    <>
      <Flex direction={'row'} align={'end'} w={'100%'} pt={'md'}>
        <Title size={16} c={'#616E7D'} ff={'monospace'}>
          Próximos vestibulares________________
        </Title>
      </Flex>
      <CarouselComponent/>
    </>
  );
}
