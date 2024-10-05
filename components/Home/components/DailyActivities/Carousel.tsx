import { Carousel, CarouselProps, CarouselSlide } from '@mantine/carousel';
import { Flex, Text, Title } from '@mantine/core';
import { Task } from './Task';

export function CarouselComponent() {
  return (
    <>
      <Flex direction={'column'} align={'start'} w={'100%'} bg={'#616E7D'} p={'md'}>
        <Title size={10} c={'white'} ff={'monospace'} pb={'md'}>
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
          <CarouselSlide>
            <Task name="Task 1" hours="08:00 hrs" />
          </CarouselSlide>
          <CarouselSlide>
            <Task name="Task 2" hours="09:10 hrs" />
          </CarouselSlide>
          <CarouselSlide>
            <Task name="Task 3" hours="10:00 hrs" />
          </CarouselSlide>
          <CarouselSlide>
            <Task name="Task 4" hours="10:50 hrs" />
          </CarouselSlide>
          <CarouselSlide>
            <Task name="Task 5" hours="13:00 hrs" />
          </CarouselSlide>
        </Carousel>
      </Flex>
    </>
  );
}
