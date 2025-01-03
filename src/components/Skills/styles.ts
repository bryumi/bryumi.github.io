import styled from 'styled-components';

export const SkillsContainer = styled.div`
  padding: 2rem 2rem 2rem 8rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;
export const SkillsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;
interface SkillsTitleProps {
  color: string;
  fontSize?: string;
}
export const SkillsTitle = styled.h2<SkillsTitleProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '2.5rem')};
  color: ${({ theme, color }) => theme.colors[color]};
  text-align: left;
`;
export const SkillsSubTitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;
export const SkillsContent = styled.div`
  width: 200px;
  height: 150px;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.background2};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    text-align: justify;
  }

  svg {
    width: 3rem;
    height: 3rem;
  }
`;

export const SwiperContainer = styled.div`
  width: 90%;
  height: 50%;
  margin: 0 auto;
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.text};
  }
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.text};
  }
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
