import Image from 'next/image';
import { Anchor, Divider, Flex, Text } from '@mantine/core';

export function NextExam() {
  return (
    <Flex direction="column" mt="md">
      <Flex direction="column">
        <Divider
          color="#616E7D"
          label="Próximo vestibular"
          labelPosition="left"
          ff="monospace"
          fw="bold"
        />
        <Text size="8px" fw="bold" c="#616E7D">
          15 de Setembro de 2024
        </Text>
      </Flex>
      <Flex direction="row" justify="start" align="center" pos="relative" pt="md">
        <Flex direction="column" align="center">
          <Image width={123} height={92} src="/ufu_logo.png" alt="Logo" />
          <Anchor
            href="https://facom.ufu.br"
            c="#616E7D"
            size="10px"
            fw="bolder"
            underline="always"
          >
            Edital
          </Anchor>
        </Flex>
        <Flex direction="column" pl="sm">
          <Text c="#616E7D" fw="bold" size="10px" pt="5px">
            Faculdade:
          </Text>
          <Text c="#616E7D" size="10px" pt="3px">
            Universidade Federal de Uberlândia
          </Text>
          <Text c="#616E7D" fw="bold" size="10px" pt="5px">
            Curso desejado:
          </Text>
          <Text c="#616E7D" size="10px" pt="3px">
            Sistemas de informação
          </Text>
          <Text c="#616E7D" fw="bold" size="10px" pt="5px">
            Site:
          </Text>
          <Anchor href="https://facom.ufu.br" c="#616E7D" size="10px" pt="3px">
            https://facom.ufu.br
          </Anchor>
          <Text c="#616E7D" fw="bold" size="10px" pt="5px">
            Redes sociais:
          </Text>
          <Flex pt="3px">
            <Anchor href="https://www.instagram.com/ufu_oficial">
              <Image width={15} height={15} src="/instagram.svg" alt="Instagram" />
            </Anchor>
            <Anchor href="https://web.facebook.com/ComunicacaoUfu" px="xs">
              <Image width={15} height={15} src="/facebook.svg" alt="Facebook" />
            </Anchor>
            <Anchor href="https://www.linkedin.com/school/ufuoficial">
              <Image width={15} height={15} src="/linkedin.svg" alt="Linkedin" />
            </Anchor>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
