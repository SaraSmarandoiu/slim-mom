import styled from 'styled-components';

export const DatePickerWrapper = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #212121;

  padding: 0px;
  border: none;
  outline: none;
  font-size: 18px;
  font-family: 'VerdanaBold, sans-serif';
  @media (max-width: 425px) {
    margin-bottom: 12px;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
    font-size: 34px;
  }
  @media (min-width: 1024px) {
    font-size: 34px ;
  }
`;

export const Icon = styled.img`
  margin-left: 20px;
`;