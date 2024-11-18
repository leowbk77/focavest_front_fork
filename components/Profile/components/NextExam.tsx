import Image from 'next/image';
import { Anchor, Divider, Flex, Text } from '@mantine/core';

interface Parameters {
  label?: string;
  date?: string;
  href?: string;
  name?: string;
  course?: string;
  website?: string;
  ig?: string;
  linkedin?: string;
  facebook?: string;
}

export function NextExam({
  label,
  date,
  href,
  name,
  course,
  website,
  ig,
  linkedin,
  facebook,
}: Parameters) {
  return (
    <Flex direction="column" mt="md">
      <Flex direction="column">
        <Divider
          color="#616E7D"
          label={label || 'Próximo vestibular'}
          labelPosition="left"
          ff="monospace"
          fw="bold"
        />
        <Text size="8px" fw="bold" c="#616E7D">
          {date || '29 de novembro de 2024'}
        </Text>
      </Flex>
      <Flex direction="row" justify="start" align="center" pos="relative" pt="md">
        <Flex direction="column" align="center">
          <Image
            width={123}
            height={92}
            src={name ? '/unitri_logo.png' : '/ufu_logo.png'}
            alt="Logo"
          />
          <Anchor
            href={href || 'https://facom.ufu.br'}
            c="#616E7D"
            size="10px"
            fw="bolder"
            underline="always"
          >
            Edital
          </Anchor>
        </Flex>
        <Flex direction="column" pl="sm">
          <Text c="#616E7D" fw="bold" size="10px" pt="5px">
            Faculdade:
          </Text>
          <Text c="#616E7D" size="10px" pt="3px">
            {name || 'Universidade Federal de Uberlândia'}
          </Text>
          <Text c="#616E7D" fw="bold" size="10px" pt="5px">
            Curso desejado:
          </Text>
          <Text c="#616E7D" size="10px" pt="3px">
            {course || 'Sistemas de Informação'}
          </Text>
          <Text c="#616E7D" fw="bold" size="10px" pt="5px">
            Site:
          </Text>
          <Anchor href={website || 'https://facom.ufu.br'} c="#616E7D" size="10px" pt="3px">
            {website || 'https://facom.ufu.br'}
          </Anchor>
          <Text c="#616E7D" fw="bold" size="10px" pt="5px">
            Redes sociais:
          </Text>
          <Flex pt="3px">
            <Anchor href={ig || 'https://www.instagram.com/ufu_oficial'}>
              <Image width={15} height={15} src="/instagram.svg" alt="Instagram" />
            </Anchor>
            <Anchor href={facebook || 'https://web.facebook.com/ComunicacaoUfu'} px="xs">
              <Image width={15} height={15} src="/facebook.svg" alt="Facebook" />
            </Anchor>
            <Anchor href={linkedin || 'https://www.linkedin.com/school/ufuoficial'}>
              <Image width={15} height={15} src="/linkedin.svg" alt="Linkedin" />
            </Anchor>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
