
import styled from 'styled-components';

export const ButtonFull = styled.button`
  padding: 13px 25px;
  border-radius: 30px;
  border: none;
  font-family: 'VerdanaBold, sans-serif';
  line-height: 1.2;
  font-size: 14px;
  letter-spacing: 0.04em;
  display: block;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  color: #ffffff;
  min-width: 182px;
  transition: background 250ms cubic-bezier(0.42, 0, 1, 1);
  background: #FC842D;

  &:hover,
  &:focus {
    background: #f07116;
  }
`;

export const ButtonEmpty = styled.button`
  padding: 13px 25px;
  border-radius: 30px;
  border: none;
  font-family: 'VerdanaBold, sans-serif';
  line-height: 1.2;
  font-size: 14px;
  letter-spacing: 0.04em;
  display: block;

  background: transparent;
  border: 2px solid #FC842D;
  color: #FC842D;
  min-width: 182px;
  transition: background 250ms cubic-bezier(0.42, 0, 1, 1);
  &:hover,
  &:focus {
    background: #f07116;
    color: #ffffff;
  }
`; 