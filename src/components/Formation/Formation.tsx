import {
  FormationContainer,
  FormationContent,
  FormationHeader,
  FormationSubTitle,
  FormationTitle,
} from './styles';

const Formation = () => {
  return (
    <FormationContainer>
      <FormationHeader>
        <FormationTitle color="primary">Formação</FormationTitle>
        <FormationSubTitle>Graduação e cursos na área</FormationSubTitle>
      </FormationHeader>
      <FormationContent>
        <FormationTitle color="text" fontSize="1.5rem">
          Graduação
        </FormationTitle>
        <p>FATEC Mogi das Cruzes - Análise e desenvolvimento de sistemas</p>
        <p>08/2022 - cursando</p>
      </FormationContent>
      <FormationContent>
        <p>USP - Bacharelado em Têxtil e Moda</p>
        <p>02/2016 - 08/2020</p>
      </FormationContent>
      <FormationContent>
        <FormationTitle color="text" fontSize="1.5rem">
          Cursos
        </FormationTitle>
        <p> Digital House Desenvolvimento Web Full Stack</p>
        <p>04/2022 - 10/2022</p>
      </FormationContent>
      <FormationContent>
        <p>Rocketseat - ReactJs</p>
        <p>02/2023 - 04/2023</p>
      </FormationContent>
    </FormationContainer>
  );
};

export default Formation;
