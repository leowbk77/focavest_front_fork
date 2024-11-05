import { Flex, Title } from '@mantine/core';
import { Profile } from './Profile';

export function Updates() {
  return (
    <>
      <Flex direction="row" pb="md">
        <Title size={16} c="#82BFAB" ff="monospace">
          Atualizações_________________________
        </Title>
      </Flex>
      <Profile
        name="Ufu"
        date="22/09/2024"
        location="Uberlândia - MG"
        text="Sejam bem vindos alunos!"
      />
      <Profile
        name="Unitri"
        date="15/09/2024"
        location="Uberlândia - MG"
        text="Exames finais definidos para dia 11/12/2024."
      />
    </>
  );
}
