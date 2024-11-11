import Image from 'next/image';
import { IconCalendarPlus, IconFile, IconStar } from '@tabler/icons-react';
import { ActionIcon, Anchor, Button, Flex, Text } from '@mantine/core';

export function Vest() {
  return (
    <>
      <Flex direction="column" justify="start" align="center" pos="relative" pt="sm">
        <Image width={160} height={120} src="/ufu_logo.png" alt="Logo" />
        <Flex direction="column" p="sm" align="center">
          <Text size="14px" c="#616E7D" ff="monospace" fw="bold">
            Universidade Federal de Uberlândia
          </Text>
          <Text size="10px" c="#616E7D" ff="monospace" pt="sm">
            Uberlândia - MG
          </Text>
          <Flex direction="column" align="center">
            <Flex justify="space-between" w="100%" pt="xl">
              <Flex align="center">
                <ActionIcon variant="transparent" color="#82BFAB" aria-label="Edital">
                  <IconFile width={20} height={20} />
                </ActionIcon>
                <Anchor
                  href="https://facom.ufu.br"
                  c="#616E7D"
                  size="16px"
                  fw="bolder"
                  underline="always"
                >
                  Edital
                </Anchor>
              </Flex>
              <Flex align="center">
                <ActionIcon variant="transparent" color="#82BFAB" aria-label="Favorite">
                  <IconStar width={20} height={20} />
                </ActionIcon>
                <Anchor href="" c="#616E7D" size="16px" fw="bolder" underline="always">
                  Favoritar
                </Anchor>
              </Flex>
            </Flex>
            <Button
              mt="md"
              bg="#616E7D"
              leftSection={<IconCalendarPlus size={24} />}
              variant="default"
              c="white"
              fw="bold"
            >
              Adicionar vestibular
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
