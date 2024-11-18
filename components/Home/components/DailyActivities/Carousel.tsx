/* eslint-disable @typescript-eslint/no-unused-vars */
import { Carousel } from '@mantine/carousel';
import { Flex, Title } from '@mantine/core';
import { useAgenda } from '@/contexts/AppContext';
import { Task } from './Task';

export function CarouselComponent() {
  const { agendas } = useAgenda();

  // eslint-disable-next-line array-callback-return
  // const today = agendas.map((agenda) => {
  //   console.log(agenda.date);
  //   console.log(new Date().toISOString().split('T')[0]);
  // });
  const todayTasks = [
    { subject: 'Teste', topic: 'teste estudos', time: '09:00' },
    { subject: 'Teste', topic: 'teste estudos', time: '09:00' },
    { subject: 'Teste', topic: 'teste estudos', time: '09:00' },
    { subject: 'Teste', topic: 'teste estudos', time: '09:00' },
    { subject: 'Teste', topic: 'teste estudos', time: '09:00' },
    { subject: 'Teste', topic: 'teste estudos', time: '09:00' },
    { subject: 'Teste', topic: 'teste estudos', time: '09:00' },
    { subject: 'Teste', topic: 'teste estudos', time: '09:00' },
  ];

  // Obtém a data atual
  const dataAtual = new Date();

  // Array com os nomes dos dias da semana
  const diasDaSemana = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];

  // Obtém o índice do dia atual da semana (0 a 6)
  const indiceDia = dataAtual.getDay();

  // Pega o nome do dia da semana correspondente
  const diaAtual = diasDaSemana[indiceDia];

  return (
    <>
      <Flex direction="column" align="start" bg="#82BFAB" p="md">
        <Title size={10} c="white" ff="monospace" pb="md">
          {diaAtual}
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
          {todayTasks.map((today, key) => (
            <Carousel.Slide>
              <Task name={today.topic} hours={today.time} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Flex>
    </>
  );
}
