import Image from 'next/image';
import Link from 'next/link';
import { IconAt, IconPassword } from '@tabler/icons-react';
import { Button, Flex, Input, Text } from '@mantine/core';

export function Login() {
  return (
    <>
      <Flex w="100vw" h="100vh" align="center" justify="center" m="auto" p="xl" bg="#82BFAB">
        <Flex direction="column" bg="white" p="xl" align="center" justify="center">
          <Image src="focavest.svg" width={65} height={42} alt="FocaVest logo" />
          <Input placeholder="Seu e-mail" leftSection={<IconAt size={16} />} my="xs" />
          <Input placeholder="Sua senha" leftSection={<IconPassword size={16} />} mb="xs" />
          <Link href="/home" style={{ textDecoration: 'none' }}>
            <Button bg="#82BFAB" mb="sm">
              Entrar
            </Button>
          </Link>

          <Link href="/" style={{ textDecoration: 'none' }}>
            <Text size="12px" c="#82BFAB" ff="monospace" fw="bold">
              Cadastre-se
            </Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
