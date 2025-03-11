import { useEffect, useState } from 'react';
import {
  ButtonContent,
  HomeContainer,
  Image,
  RightContainer,
  TextContainer,
} from './styles';

interface HomeProps {
  onPageChange: (page: string) => void;
}
const Home = ({ onPageChange }: HomeProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return 'Bom dia';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Boa tarde';
    } else {
      return 'Boa noite';
    }
  };
  const text = `Olá, ${getGreeting()}!\n Bem-vindo ao meu portfólio! \n Meu nome é Bruna Yumi\n sou desenvolvedora de software!\n`;
  useEffect(() => {
    let currentIndex = 0;
    const textArray = text.split('');

    const timer = setInterval(() => {
      if (currentIndex < textArray.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex += 1;
      } else {
        clearInterval(timer); // Para o intervalo quando o texto completo foi exibido
      }
    }, 75);

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar o componente
  }, [text]);
  return (
    <HomeContainer>
      <Image src="/images/home.png" />
      <RightContainer>
        <TextContainer>
          {displayedText.split('\n').map((line, index) => (
            <>
              <span key={index}>{line}</span>
              <br />
            </>
          ))}
        </TextContainer>
        <ButtonContent onClick={() => onPageChange('Formação')}>
          Ver mais
        </ButtonContent>
      </RightContainer>
    </HomeContainer>
  );
};

export default Home;
