import { Divider } from '@mantine/core';
import { Profile } from './Profile';

export function Updates() {
  return (
    <>
      <Divider
        color="#616E7D"
        variant="solid"
        label="Fórum"
        labelPosition="left"
        pb="sm"
        ff="monospace"
        fw="bold"
        mt="md"
      />
      <Profile
        name="ProfJunior"
        date="29/10/2024"
        location="Uberlândia - MG"
        text="Faltam poucas semanas para o vestibular! Hora de revisar, fazer simulados e manter o foco. Reta final, pessoal!"
        likes="Leonardo e mais 12 pessoas gostaram"
        comments="3 comentários"
      />
      <Profile
        name="UFMG"
        date="10/11/2024"
        location="Belo Horizonte - MG"
        text="O edital saiu! Confiram as datas e requisitos para não perderem nada importante. Organização agora é tudo!"
        likes="Lucas e mais 227 pessoas gostaram"
        comments="39 comentários"
      />
    </>
  );
}
