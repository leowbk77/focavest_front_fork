import { Divider } from '@mantine/core';
import { CarouselComponent } from './Carousel';

export function NextExams() {
  return (
    <>
      <Divider
        color="#616E7D"
        variant="solid"
        label="Próximos vestibulares"
        labelPosition="left"
        pt="lg"
        ff="monospace"
        fw="bold"
      />
      <CarouselComponent />
    </>
  );
}
