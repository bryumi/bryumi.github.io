import {
  SkillsContainer,
  SkillsContent,
  SkillsHeader,
  SkillsSubTitle,
  SkillsTitle,
  SwiperContainer,
} from './styles';
import 'swiper/css'; // Estilo básico do Swiper
import 'swiper/css/navigation'; // Estilos para botões de navegação (opcional)
import 'swiper/css/pagination'; // Estilos para a paginação (opcional)
import 'swiper/css/autoplay'; // Estilos para a barra de rolagem (opcional)
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { skillsData } from './skillsData';

const Skills = () => {
  return (
    <SkillsContainer>
      <SkillsHeader>
        <SkillsTitle color="primary">Habilidades</SkillsTitle>
        <SkillsSubTitle>Hard skills</SkillsSubTitle>
      </SkillsHeader>
      <SwiperContainer>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]} // Módulos extras
          spaceBetween={30} // Espaço entre os slides
          slidesPerView={4} // Quantos slides mostrar por vez
          navigation // Botões de navegação
          pagination={{ clickable: true }} // Habilitar paginação clicável
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Configurar autoplay
          loop={true} // Loop infinito
        >
          {skillsData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  height: '200px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: 'transparent',
                  borderRadius: '10px',
                }}
              >
                <SkillsContent>
                  <SkillsTitle color="text" fontSize="1.5rem">
                    {slide.title}
                  </SkillsTitle>
                  {slide.icon}
                </SkillsContent>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </SkillsContainer>
  );
};

export default Skills;
