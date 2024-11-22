import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  gap: 32px;
  justify-content: flex-end;
  padding: 15px 20px 8px;
  background-color: #F0F1F3;
  @media (max-width: 425px) {
    position: relative; 
    z-index: 21;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
    background: transparent;
    margin-left: auto;
    margin-right: 48px;
    padding: 0;
  }
  @media (min-width: 1024px) {
    background: transparent;
    padding: 0;
    margin-left: auto;
  }
`;

export const Name = styled.button`
  padding: 0;
  border: none;
  font-family: 'GothamProBold';
  line-height: 1.2;
  font-size: 14px;
  text-align: right;
  letter-spacing: 0.04em;
  background: transparent;

  text-transform: uppercase;
  color: #212121;
  @media (min-width: 426px) and (max-width: 1023px) {
    background: transparent;
  }
  @media (min-width: 1024px) {
    background: transparent;
  }
`;

export const Exit = styled.button`
  padding: 0;
  border: none;
  font-family: 'GothamProBold';
  line-height: 1.2;
  font-size: 14px;
  text-align: right;
  letter-spacing: 0.04em;
  background: transparent;

  color: #212121;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  &:hover {
    color: #9B9FAA;
  }
  &:before {
    content: '';
    position: absolute;
    top: -4px;
    left: -20px;
    height: 32px;
    width: 2px;
    background-color: #e0e0e0;
  }

  @media (min-width: 426px) and (max-width: 1023px) {
    background: transparent;
  }
  @media (min-width: 1024px) {
    background: transparent;
  }
`;