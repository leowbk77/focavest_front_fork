import Image from 'next/image';
import { Anchor, Divider, Flex } from '@mantine/core';

export function ExamsSelected() {
  return (
    <Flex direction="column" mt="md">
      <Divider
        color="#616E7D"
        label="Vestibulares selecionados"
        labelPosition="left"
        ff="monospace"
        fw="bold"
      />
      <Flex direction="row" justify="start" align="center" pos="relative" pt="xs">
        <Flex direction="column" align="center">
          <Image width={87} height={87} src="/ufu_logo.png" alt="Logo" />
          <Anchor
            href="https://facom.ufu.br"
            c="#616E7D"
            size="10px"
            fw="bolder"
            underline="always"
          >
            Página
          </Anchor>
        </Flex>
        <Flex direction="column" align="center">
          <Image width={87} height={87} src="/unitri_logo.png" alt="Logo" />
          <Anchor
            href="https://unitri.edu.br"
            c="#616E7D"
            size="10px"
            fw="bolder"
            underline="always"
          >
            Página
          </Anchor>
        </Flex>
      </Flex>
    </Flex>
  );
}
