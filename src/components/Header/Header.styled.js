import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #E0E0E0;
  @media (max-width: 425px) {
    position: relative; 
    z-index: 22;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
    padding: 20px 32px;
    
  }
  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    justify-content: flex-start;
    align-items: flex-end;
    padding: 80px 16px;
    border: none;
    width: calc(100% - 32px);
    margin: 0 auto;
  }
  
`;

export const Logo = styled.img`
  height: 44px;
  filter: filter;
  @media (min-width: 426px) and (max-width: 1023px) {
  }
  @media (min-width: 1024px) {
    height: 66px;
    margin-right: 40px;
  }
`;

export const BtnList = styled.ul`
  display: flex;
  gap: 16px;
  top: -4px;

  @media (min-width: 426px) and (max-width: 1023px) {
  }
  @media (min-width: 1024px) {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: -5px;
      left: -20px;
      height: 32px;
      width: 2px;
      background-color: #e0e0e0;
    }
    align-items: flex-end;
  }
`;

export const HeaderBtn = styled.button`
  padding: 0;
  border: none;
  font-family: 'GothamProBold';
  line-height: 1.2;
  font-size: 14px;
  text-align: right;
  letter-spacing: 0.04em;

  background: #ffffff;
  text-transform: uppercase;

  @media (min-width: 426px) and (max-width: 1023px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 0px;
  border: none;
  font-family: GothamProBold;
  line-height: 1.2;
  font-size: 14px;
  text-align: right;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: rgb(255, 255, 255);
  color: rgb(33, 33, 33);
  text-decoration: none;
  &.active {
    color: #9B9FAA;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
  }
  @media (min-width: 1024px) {
    padding: 0;
    border: none;
    font-family: 'GothamProBold';
    line-height: 1.2;
    font-size: 14px;
    text-align: right;
    letter-spacing: 0.04em;

    text-transform: uppercase;
    background: transparent;
    color: #212121;
    text-decoration: none;

    &.active {
      color: #9B9FAA;
    }
    &:hover,
    &:focus {
      color: #9B9FAA;
    }
  }
`; 