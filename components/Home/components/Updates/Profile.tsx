import Image from 'next/image';
import { Flex, Text } from '@mantine/core';

interface Props {
  name: string;
  location: string;
  date: string;
  text: string;
}

export function Profile({ name, location, date, text }: Props) {
  return (
    <>
      <Flex direction="row" justify="start" align="center" pos="relative">
        <Image
          width={80}
          height={60}
          src={name === 'Ufu' ? '/ufu_logo.png' : '/unitri_logo.png'}
          alt="Logo"
        />
        <Flex direction="column" p="sm">
          <Text size="14px" c="#82BFAB" ff="monospace" fw="bold">
            @{name}
          </Text>
          <Text size="10px" c="#82BFAB" ff="monospace" pt="sm">
            {location}
          </Text>
        </Flex>
        <Text size="10px" c="#A6ADB5" ff="monospace" pt="sm" right={0} bottom={15} pos="absolute">
          {date}
        </Text>
      </Flex>
      <Flex w="100%">
        <Text size="12px" p="sm">
          {text}
        </Text>
      </Flex>
    </>
  );
}
