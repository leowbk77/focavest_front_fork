import Image from 'next/image';
import { Flex, Text } from '@mantine/core';

export function ProfileInfo() {
  return (
    <>
      <Flex direction="column">
        <Flex direction="row" mt="lg">
          <Image src="/profile.png" width={132} height={132} alt="Profile" />
          <Flex direction="column" pl="sm">
            <Text c="#616E7D" fw="bold" size="16px" pt="5px">
              Nome do usuário:
            </Text>
            <Text c="#616E7D" size="12px" pt="5px">
              Leonardo
            </Text>
            <Text c="#616E7D" fw="bold" size="16px" pt="sm">
              Idade:
            </Text>
            <Text c="#616E7D" size="12px" pt="5px">
              25y
            </Text>
            <Text c="#616E7D" fw="bold" size="16px" pt="sm">
              Cidade:
            </Text>
            <Text c="#616E7D" size="12px" pt="5px">
              Uberlândia - MG
            </Text>
          </Flex>
        </Flex>
        <Text c="#616E7D" fw="bold" size="16px" pt="sm">
          Cursos desejados:
        </Text>
        <Text c="#616E7D" size="12px" pt="5px">
          Sistemas de Informação, Ciência da computação, Engenharia de Software, Engenharia da
          computação
        </Text>
      </Flex>
    </>
  );
}
