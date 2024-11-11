import Image from 'next/image';
import { IconId, IconSettingsFilled } from '@tabler/icons-react';
import { ActionIcon, Box, Flex } from '@mantine/core';

export function Header() {
  return (
    <>
      <Flex direction="row" justify="space-between" align="start" w="100%" pb="md">
        <Image src="focavest.svg" width={65} height={42} alt="FocaVest logo" />
        <Box>
          <ActionIcon color="white" aria-label="ID">
            <IconId color="#82BFAB" stroke={2} />
          </ActionIcon>
          <ActionIcon color="white" aria-label="Settings">
            <IconSettingsFilled color="#82BFAB" stroke={2} />
          </ActionIcon>
        </Box>
      </Flex>
    </>
  );
}
