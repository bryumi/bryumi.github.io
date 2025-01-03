import { CaretCircleDown } from 'phosphor-react';
import {
  ExperienceContainer,
  ExperienceContent,
  ExperienceHeader,
  ExperienceSubTitle,
  ExperienceTitle,
  Header,
  TextContainer,
} from './styles';
import { useState } from 'react';
import { experienceData } from './experienceData';

const Experience = () => {
  const [showText, setShowText] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ExperienceContainer>
      <ExperienceHeader>
        <ExperienceTitle color="primary">Experiência</ExperienceTitle>
        <ExperienceSubTitle>Projetos realizados</ExperienceSubTitle>
      </ExperienceHeader>
      {experienceData.map((experience, index) => (
        <ExperienceContent
          key={index}
          showText={showText}
          index={index}
          selectedIndex={selectedIndex}
        >
          <Header>
            <ExperienceTitle color="text" fontSize="1rem">
              {experience.title}
            </ExperienceTitle>
            <ExperienceTitle color="text" fontSize="1rem">
              {experience.year}
            </ExperienceTitle>
            <button
              onClick={() => {
                setSelectedIndex(index);
                setShowText(!showText);
              }}
            >
              <CaretCircleDown size={32} />
            </button>
          </Header>
          <TextContainer
            index={index}
            showText={showText}
            selectedIndex={selectedIndex}
          >
            <p>{experience.description}</p>
          </TextContainer>
        </ExperienceContent>
      ))}
    </ExperienceContainer>
  );
};

export default Experience;
