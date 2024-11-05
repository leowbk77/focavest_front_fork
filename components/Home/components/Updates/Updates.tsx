import { Divider } from '@mantine/core';
import { Profile } from './Profile';

export function Updates() {
  return (
    <>
      <Divider
        color="#616E7D"
        variant="solid"
        label="Atualizações"
        labelPosition="left"
        pb="sm"
        ff="monospace"
        fw="bold"
      />
      <Profile
        name="Ufu"
        date="22/09/2024"
        location="Uberlândia - MG"
        text="Sejam bem vindos alunos! É um prazer recebê-los em nosso Campus. Qualquer dúvida entre em contato com a REITORIA ou COORDENAÇÃO do seu curso."
        likes="Leonardo e mais 359 pessoas gostaram"
        comments="23 comentários"
      />
      <Profile
        name="Unitri"
        date="15/09/2024"
        location="Uberlândia - MG"
        text="Exames finais definidos para dia 11/12/2024."
        likes="Rafael e mais 119 pessoas gostaram"
        comments="12 comentários"
      />
    </>
  );
}
