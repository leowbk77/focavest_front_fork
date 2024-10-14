import { Carousel, CarouselProps, CarouselSlide } from '@mantine/carousel';
import { Flex, Text, Title } from '@mantine/core';
import { IconArrowBadgeDownFilled } from '@tabler/icons-react';
import { Exam } from './Exam';

export function CarouselComponent() {
  return (
    <>
      <Flex direction={'column'} align={'start'} w={'100%'} >
        <Title size={10} c={'white'} ff={'monospace'} pb={'md'}>
          Segunda - feira
        </Title>
        <Carousel
          height={120}
          slideSize="17%"
          slideGap="xs"
          align="start"
          slidesToScroll={3}
          w={'100%'}
        >
          <CarouselSlide>
            <Exam name='Vest-1'/>
          </CarouselSlide>
          <CarouselSlide>
            <Exam name='Vest-2'/>
          </CarouselSlide>
          <CarouselSlide>
            <Exam name='Vest-3'/>
          </CarouselSlide>
          <CarouselSlide>
            <Exam name='Vest-4'/>
          </CarouselSlide>
          <CarouselSlide>
            <Exam name='Vest-5'/>
          </CarouselSlide>
          <CarouselSlide>
            <Exam name='Vest-6'/>
          </CarouselSlide>
          <CarouselSlide>
            <Exam name='Vest-7'/>
          </CarouselSlide>
        </Carousel>
      </Flex>
    </>
  );
}
