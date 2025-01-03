import styled from 'styled-components';

export const ToggleContainer = styled.div`
  position: relative;
  width: 3.5rem;
  height: 29px;
  margin-left: 6rem;
  margin-top: 1rem;

  input[type='checkbox'] {
    position: absolute;
    appearance: none;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.background2};
    border-radius: 50px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }

  input:checked[type='checkbox'] {
    background: ${({ theme }) => theme.colors.background2};
  }

  input[type='checkbox']::after {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    top: 4.5px;
    left: 5px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
    transition: 0.4s;
  }

  input:checked[type='checkbox']::after {
    left: calc(100% - 22px);
    background: ${({ theme }) => theme.colors.offWhite};
  }

  .label-container {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text};
  }
  .active-text,
  .inactive-text {
    position: absolute;
    transition: opacity 0.4s;
  }

  .active-text {
    opacity: 0;
    left: calc(100% - 51px);
  }

  .inactive-text {
    font-size: 11px;
    opacity: 1;
    left: 29px;
  }

  input:checked ~ .label-container .active-text {
    opacity: 1;
  }

  input:checked ~ .label-container .inactive-text {
    opacity: 0;
  }
`;
