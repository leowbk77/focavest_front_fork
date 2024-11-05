import { Flex, Title } from '@mantine/core';
import { CarouselComponent } from './Carousel';

export function NextExams() {
  return (
    <>
      <Flex direction="row" align="end" pt="md">
        <Title size={16} c="#82BFAB" ff="monospace">
          Próximos vestibulares________________
        </Title>
      </Flex>
      <CarouselComponent />
    </>
  );
}
