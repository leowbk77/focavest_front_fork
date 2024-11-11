import { Flex, Text } from '@mantine/core';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { useAgenda } from '@/contexts/AppContext';
import { Suspense } from 'react';

function Loading() {
  return (<h2>🌀 Loading...</h2>);
}
export function Calendar() {
  const {agendas} = useAgenda();

  return (
    <>
      <Flex direction="column" w={390} align="center" m="auto" p="xl">
        <Header />
        <Flex direction="column">
            <Suspense fallback={<Loading />}>
            {
                agendas.map((daily) => {
                  return (
                    <div>
                      <span><strong>{daily.date}</strong></span>
                      {
                        daily.tasks.map((task) => {
                          return (
                            <>
                              <p><strong>Assunto:</strong> {task.subject}</p>
                              <p>Tópico: {task.topic}</p>
                              <p>Hora: {task.time}</p>
                              <p>Duracao: ...</p>
                            </>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </Suspense>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
