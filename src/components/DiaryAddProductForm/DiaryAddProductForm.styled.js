import { Field, Form } from 'formik';
import styled from 'styled-components';

export const NameInput = styled(Field)`
  border: none;
  width: 280px;
  margin-bottom: 32px;
  padding-bottom: 8px;
  border-bottom:1px solid #E0E0E0;
  font-family: 'VerdanaBold, sans-serif';
  line-height: 1.2;
  font-size: 14px;
  color: #212121;
  background-color: transparent;
  letter-spacing: 0.04em;
  &::placeholder {
    color: #9B9FAA;
    opacity: 1;
  }
  &:focus-visible {
    outline: none;
  }

  @media (min-width: 426px) and (max-width: 1023px) {
    margin-right: 12px;
    width: 240px;
    margin-bottom: 0px;
  }
  @media (min-width: 1024px) {
    width: 240px;
    margin-right: 48px;
    margin-bottom: 0px;
  }
`;

export const GramsInput = styled(Field)`
  text-align: left;
  border: none;
  width: 280px;
  margin-bottom: 60px;
  padding-bottom: 8px;
  border-bottom: 1px solid #E0E0E0;
  font-family: 'VerdanaBold, sans-serif';
  line-height: 1.2;
  font-size: 14px;
  color: #212121;
  background-color: transparent;

  letter-spacing: 0.04em;
  &::placeholder {
    color: #9B9FAA;
    opacity: 1;
  }
  &:focus-visible {
    outline: none;
  }

  @media (min-width: 426px) and (max-width: 1023px) {
    text-align: right;
    width: 107px;
    margin-bottom: 0px;
    margin-right: 8px;
  }
  @media (min-width: 1024px) {
    text-align: right;
    width: 107px;
    margin-bottom: 0px;
    margin-right: 60px;
  }
`;

export const NameError = styled.div`
  display: inline;
  text-align: center;
  top: 30px;
  right: 40px;
  position: absolute;
  font-size: 10px;
  color: white;
  background-color: red;
  padding: 5px;
  border-radius: 5px;
  width: 240px;
  @media (min-width: 426px) and (max-width: 1023px) {
    left: 0;
    top: 55px;

    text-align: left;
  }
  @media (min-width: 1024px) {
    left: 0;
    top: 55px;
    text-align: left;
  }
`;

export const GramsError = styled.div`
  display: inline;
  position: absolute;
  top: 90px;
  right: 65px;
  font-size: 10px;
  color: white;
  background-color: red;
  padding: 5px;
  border-radius: 5px;
  @media (min-width: 426px) and (max-width: 1023px) {
    top: 55px;
    right: 200px;
    width: 107px;
  }
  @media (min-width: 1024px) {
    top: 55px;
    right: 207px;
    width: 107px;
  }
`;

export const Button = styled.button`
  border-radius: 30px;
  padding: 13px 76px;
  border: none;
  font-family: 'VerdanaBold, sans-serif';
  line-height: 1.2;
  font-size: 14px;
  letter-spacing: 0.04em;
  cursor: pointer;

  color: #ffffff;
  background: #FC842D;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);

  @media (min-width: 426px) and (max-width: 1023px) {
    padding: 12px 13px 11px;
    border-radius: 50%;
  }
  @media (min-width: 1024px) {
    padding: 12px 13px 11px;
    border-radius: 50%;
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const FormWrapper = styled(Form)`
  display: block;
  text-align: center;

  @media (min-width: 426px) and (max-width: 1023px) {
    display: flex;
    max-width: 503px;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const SearchBox = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #ccc;
  z-index: 10;
  list-style: none;
  padding: 10px;
  margin: 0;

  &.visible {
    display: block;
  }
`;


export const SearchItem = styled.li`
  cursor: pointer;
  padding: 5px 10px;
  font-family: VerdanaBold, sans-serif;
  border-bottom: 1px solid #E0E0E0;
  &:hover {
    background-color: #F0F1F3;
`;

export const SearchItemNotRecommended = styled.li`
cursor: pointer;
padding: 5px 10px;
font-family: 'VerdanaBold, sans-serif';
border-bottom: 1px solid #E0E0E0;
background-color: #f5503b;
color: white;

&:hover {
  background-color: #bf3e2e;
}

&::after {
  content: 'Not recommended';
  font-size: 10px;
  margin-left: 10px;
}
`