import Image from 'next/image';
import { IconDotsVertical, IconHeart, IconMessage, IconShare } from '@tabler/icons-react';
import { ActionIcon, Divider, Flex, Text } from '@mantine/core';

interface Props {
  name: string;
  location: string;
  date: string;
  text: string;
  likes: string;
  comments: string;
}

export function Profile({ name, location, date, text, likes, comments }: Props) {
  return (
    <>
      <Flex direction="row" justify="start" align="center" pos="relative">
        <Image
          width={60}
          height={60}
          src={name === 'ProfJunior' ? '/profjunior.png' : '/ufmg.png'}
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
        <Text size="12px" py="sm">
          {text}
        </Text>
      </Flex>
      <Divider />
      <Flex justify="space-between" align="center" py="xs">
        <Flex>
          <Flex direction="column" justify="center" align="center" px="sm">
            <ActionIcon variant="transparent" color="#82BFAB" aria-label="Like">
              <IconHeart width={20} height={20} />
            </ActionIcon>
            <Text ff="monospace" c="#82BFAB" size="8px">
              Gostei
            </Text>
          </Flex>
          <Flex direction="column" justify="center" align="center" px="sm">
            <ActionIcon variant="transparent" color="#82BFAB" aria-label="Comment">
              <IconMessage width={20} height={20} />
            </ActionIcon>
            <Text ff="monospace" c="#82BFAB" size="8px">
              Comentar
            </Text>
          </Flex>
          <Flex direction="column" justify="center" align="center" px="sm">
            <ActionIcon variant="transparent" color="#82BFAB" aria-label="Share">
              <IconShare width={20} height={20} />
            </ActionIcon>
            <Text ff="monospace" c="#82BFAB" size="8px">
              Compartilhar
            </Text>
          </Flex>
        </Flex>
        <ActionIcon variant="filled" color="#82BFAB" aria-label="More">
          <IconDotsVertical width={20} height={20} />
        </ActionIcon>
      </Flex>
      <Divider />
      <Flex align="center">
        <ActionIcon variant="transparent" color="#82BFAB" aria-label="Like">
          <IconHeart width={15} height={15} />
        </ActionIcon>
        <Text c="#616E7D" ff="monospace" size="8px" fw="bold">
          {likes}
        </Text>
        <ActionIcon variant="transparent" color="#82BFAB" aria-label="Comment">
          <IconMessage width={15} height={15} />
        </ActionIcon>
        <Text c="#616E7D" ff="monospace" size="8px" fw="bold">
          {comments}
        </Text>
      </Flex>
    </>
  );
}
