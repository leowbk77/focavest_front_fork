import { Flex, Text, Title } from '@mantine/core';
import { CarouselComponent } from './Carousel';

export function DailyActivities() {
  return (
    <>
      <Flex direction="row" align="end" pb="md">
        <Title size={16} c="#82BFAB" ff="monospace">
          Bem vindo(a)____________
        </Title>
        <Text size="10px" ff="monospace" pl="sm" c="#82BFAB">
          Atividades diárias
        </Text>
      </Flex>
      <CarouselComponent />
    </>
  );
}
