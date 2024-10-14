import { IconSettingsFilled } from '@tabler/icons-react';
import { ActionIcon, Flex } from '@mantine/core';

export function Header() {
  return (
    <>
      <Flex direction={'row'} justify={'space-between'} align={'start'} w={'100%'} pb={'md'}>
        <img src="focavest.svg" alt="FocaVest logo" />
        <ActionIcon color="white" aria-label="Settings">
          <IconSettingsFilled color='gray' stroke={2} />
        </ActionIcon>
      </Flex>
    </>
  );
}
