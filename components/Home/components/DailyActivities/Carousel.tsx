import { Carousel } from '@mantine/carousel';
import { Flex, Title } from '@mantine/core';
import { Task } from './Task';

export function CarouselComponent() {
  return (
    <>
      <Flex direction="column" align="start" bg="#82BFAB" p="md">
        <Title size={10} c="white" ff="monospace" pb="md">
          Segunda - feira
        </Title>
        <Carousel
          withIndicators
          height={100}
          slideSize="17%"
          slideGap="xs"
          align="start"
          slidesToScroll={3}
          w={296}
        >
          <Carousel.Slide>
            <Task name="Acordar" hours="08:00 hrs" />
          </Carousel.Slide>
          <Carousel.Slide>
            <Task name="Café da manhã" hours="09:10 hrs" />
          </Carousel.Slide>
          <Carousel.Slide>
            <Task name="Estudar" hours="10:00 hrs" />
          </Carousel.Slide>
          <Carousel.Slide>
            <Task name="Academia" hours="10:50 hrs" />
          </Carousel.Slide>
          <Carousel.Slide>
            <Task name="Almoço" hours="13:00 hrs" />
          </Carousel.Slide>
        </Carousel>
      </Flex>
    </>
  );
}
