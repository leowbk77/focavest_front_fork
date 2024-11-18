import { Suspense } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Flex, Indicator, Loader } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { NextExam } from '../Profile/components/NextExam';

function Loading() {
  return <Loader />;
}
export function CalendarHomepage() {
  return (
    <>
      <Flex direction="column" w={390} align="center" m="auto" p="xl">
        <Header />
        <Suspense fallback={<Loading />}>
          <Flex direction="column" align="center" justify="center" pb={70}>
            <Calendar
              size="xl"
              previousIcon={<IconChevronLeft height={15} width={15} />}
              nextIcon={<IconChevronRight height={15} width={15} />}
              static
              renderDay={(date) => {
                const day = date.getDate();
                return (
                  <Indicator size={8} color="#82BFAB" offset={-2} disabled={day !== 15}>
                    <div style={{ padding: 3 }}>{day}</div>
                  </Indicator>
                );
              }}
            />
            <NextExam />
            <NextExam
              date="11 de Dezembro de 2024"
              label="Favorito"
              name="Centro Universitário do Triângulo"
              course="Ciência da Computação"
              website="www.unitri.edu.br"
              ig="https://www.instagram.com/unitriasoec"
              facebook="https://web.facebook.com/UnitriAsoec"
              linkedin="https://www.linkedin.com/school/unitriasoec"
            />
          </Flex>
        </Suspense>

        <Footer />
      </Flex>
    </>
  );
}
