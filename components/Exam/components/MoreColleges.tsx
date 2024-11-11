import Image from 'next/image';
import { Anchor, Divider, Flex } from '@mantine/core';

export function MoreColleges() {
  return (
    <Flex direction="column" mt="md">
      <Divider
        color="#616E7D"
        label="Outras faculdades"
        labelPosition="left"
        ff="monospace"
        fw="bold"
      />
      <Flex direction="row" justify="start" align="center" pos="relative" pt="xs">
        <Flex direction="column" align="center">
          <Image width={87} height={87} src="/ufmg.png" alt="Logo" />
          <Anchor href="https://ufmg.br" c="#616E7D" size="10px" fw="bolder" underline="always">
            Acessar
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
            Acessar
          </Anchor>
        </Flex>
      </Flex>
    </Flex>
  );
}
