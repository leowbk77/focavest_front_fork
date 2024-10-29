import {
  IconCalendarFilled,
  IconCalendarPlus,
  IconHomeFilled,
  IconUsers,
  IconUserScan
} from '@tabler/icons-react';
import { ActionIcon, Flex, Text, Button } from '@mantine/core';
import Link from 'next/link'

export function Footer() {
  return (
    <Flex direction={'row'} pos={'fixed'} bottom={0} bg={'white'} p={'sm'}>
      
      <Link href="/">
        <Flex direction={'column'} justify={'center'} align={'center'} px={'sm'}>
          <ActionIcon variant="filled" color="gray" aria-label="Start">
            <IconHomeFilled />
          </ActionIcon>
          <Text ff={'monospace'} c={'#616E7D'} size="12px" pt={'sm'}>
            Início
          </Text>
        </Flex>
      </Link>
      

      <Link href="/calendario">
        <Flex direction={'column'} justify={'center'} align={'center'} px={'sm'}>
          <ActionIcon variant="filled" color="gray" aria-label="Calendar">
            <IconCalendarFilled style={{ width: '20px', height: '1500' }} />
          </ActionIcon>
          <Text ff={'monospace'} c={'#616E7D'} size="12px" pt={'sm'}>
            Calendário
          </Text>
        </Flex>
      </Link>

      <Link href="/">
        <Flex direction={'column'} justify={'center'} align={'center'} px={'sm'}>
          <ActionIcon variant="filled" color="gray" aria-label="Vest">
            <IconCalendarPlus style={{ width: '20px', height: '1500' }} />
          </ActionIcon>
          <Text ff={'monospace'} c={'#616E7D'} size="12px" pt={'sm'}>
            Vest
          </Text>
        </Flex>
      </Link>
      
      <Link href="/">
        <Flex direction={'column'} justify={'center'} align={'center'} px={'sm'}>
          <ActionIcon variant="filled" color="gray" aria-label="Forum">
            <IconUsers style={{ width: '20px', height: '1500' }} />
          </ActionIcon>
          <Text ff={'monospace'} c={'#616E7D'} size="12px" pt={'sm'}>
            Forum
          </Text>
        </Flex>
      </Link>

      <Link href="/">
        <Flex direction={'column'} justify={'center'} align={'center'} px={'sm'}>
          <ActionIcon variant="filled" color="gray" aria-label="Profile">
            <IconUserScan style={{ width: '20px', height: '1500' }} />
          </ActionIcon>
          <Text ff={'monospace'} c={'#616E7D'} size="12px" pt={'sm'}>
            Perfil
          </Text>
        </Flex>
      </Link>

    </Flex>
  );
}
