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
    <Flex direction="row" pos="fixed" h={70} bottom={0} bg="white" p="sm">
      <Link href="/home" style={{ textDecoration: 'none', width: '78px' }}>
        <Flex direction="column" justify="center" align="center" px="sm">
          <ActionIcon variant="filled" color="#82BFAB" aria-label="Start">
            <IconHomeFilled />
          </ActionIcon>
          <Text ff="monospace" c="#616E7D" fw="bold" size="12px" pt="xs">
            Início
          </Text>
        </Flex>
      </Link>

      <Link href="/calendar" style={{ textDecoration: 'none', width: '78px' }}>
        <Flex direction="column" justify="center" align="center" px="sm">
          <ActionIcon variant="filled" color="#82BFAB" aria-label="Calendar">
            <IconCalendarFilled />
          </ActionIcon>
          <Text ff="monospace" c="#616E7D" fw="bold" size="12px" pt="xs">
            Calendário
          </Text>
        </Flex>
      </Link>

      <Link href="/exam" style={{ textDecoration: 'none', width: '78px' }}>
        <Flex direction="column" justify="center" align="center" px="sm">
          <ActionIcon variant="filled" color="#82BFAB" aria-label="Vest">
            <IconCalendarPlus />
          </ActionIcon>
          <Text ff="monospace" c="#616E7D" fw="bold" size="12px" pt="xs">
            Vest
          </Text>
        </Flex>
      </Link>

      <Link href="/forum" style={{ textDecoration: 'none', width: '78px' }}>
        <Flex direction="column" justify="center" align="center" px="sm">
          <ActionIcon variant="filled" color="#82BFAB" aria-label="Forum">
            <IconUsers />
          </ActionIcon>
          <Text ff="monospace" c="#616E7D" fw="bold" size="12px" pt="xs">
            Forum
          </Text>
        </Flex>
      </Link>

      <Link href="/profile" style={{ textDecoration: 'none', width: '78px' }}>
        <Flex direction="column" justify="center" align="center" px="sm">
          <ActionIcon variant="filled" color="#82BFAB" aria-label="Profile">
            <IconUserScan />
          </ActionIcon>
          <Text ff="monospace" c="#616E7D" fw="bold" size="12px" pt="xs">
            Perfil
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}
