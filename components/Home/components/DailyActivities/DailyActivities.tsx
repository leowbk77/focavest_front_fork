import { Divider } from '@mantine/core';
import { CarouselComponent } from './Carousel';

export function DailyActivities() {
  return (
    <>
      <Divider
        color="#616E7D"
        variant="solid"
        label="Bem vindo(a)"
        labelPosition="left"
        pb="sm"
        ff="monospace"
        fw="bold"
      />
      <CarouselComponent />
    </>
  );
}
