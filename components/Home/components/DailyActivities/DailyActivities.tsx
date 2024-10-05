import { Flex, Text, Title } from '@mantine/core';
import { CarouselComponent } from './Carousel';

export function DailyActivities() {
  return (
    <>
      <Flex direction={'row'} align={'end'} w={'100%'} pb={'md'}>
        <Title size={16} c={'#616E7D'} ff={'monospace'}>
          Bem vindo(a)____________
        </Title>
        <Text size={'10px'} ff={'monospace'} pl={'sm'} c={'#616E7D'}>Atividades diárias</Text>
      </Flex>
      <CarouselComponent/>
    </>
  );
}
