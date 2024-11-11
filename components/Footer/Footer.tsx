import Link from 'next/link';
import {
  IconCalendarFilled,
  IconCalendarPlus,
  IconHomeFilled,
  IconUsers,
  IconUserScan,
} from '@tabler/icons-react';
import { ActionIcon, Flex, Text } from '@mantine/core';

export function Footer() {
  return (
    <Flex direction="row" pos="fixed" h={70} bottom={0} bg="white" p="xs">
      <Link href="/">
        <Flex direction="column" justify="center" align="center" px="sm">
          <ActionIcon variant="filled" color="#82BFAB" aria-label="Start">
            <IconHomeFilled />
          </ActionIcon>
          <Text ff="monospace" c="#82BFAB" size="12px" pt="sm">
            Início
          </Text>
        </Flex>
      </Link>

      <Link href="/calendar">
        <Flex direction="column" justify="center" align="center" px="sm">
          <ActionIcon variant="filled" color="#82BFAB" aria-label="Calendar">
            <IconCalendarFilled />
          </ActionIcon>
          <Text ff="monospace" c="#82BFAB" size="12px" pt="sm">
            Calendário
          </Text>
        </Flex>
      </Link>

      <Link href="/exam">
        <Flex direction="column" justify="center" align="center" px="sm">
          <ActionIcon variant="filled" color="#82BFAB" aria-label="Vest">
            <IconCalendarPlus />
          </ActionIcon>
          <Text ff="monospace" c="#82BFAB" size="12px" pt="sm">
            Vest
          </Text>
        </Flex>
      </Link>

      <Link href="/forum">
        <Flex direction="column" justify="center" align="center" px="sm">
          <ActionIcon variant="filled" color="#82BFAB" aria-label="Forum">
            <IconUsers />
          </ActionIcon>
          <Text ff="monospace" c="#82BFAB" size="12px" pt="sm">
            Forum
          </Text>
        </Flex>
      </Link>

      <Link href="/profile">
        <Flex direction="column" justify="center" align="center" px="sm">
          <ActionIcon variant="filled" color="#82BFAB" aria-label="Profile">
            <IconUserScan />
          </ActionIcon>
          <Text ff="monospace" c="#82BFAB" size="12px" pt="sm">
            Perfil
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}
