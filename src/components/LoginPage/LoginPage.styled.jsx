import styled from 'styled-components';
import { Field } from 'formik';

export const FormLabel = styled.label`
  :last-child {
    padding-bottom: 0px;
  }

  display: block;
  font-family: 'VerdanaBold, sans-serif';
  height: 36px;
  padding-bottom: 40px;
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #9B9FAA;
`;

export const LoginButton = styled.button`
  cursor: pointer;
  margin-top: 20px;
  width: 182px;
  height: 44px;

  color: #ffffff;
  background-color: #fc842d;
  border-radius: 30px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border: none;
  font-family: 'VerdanaBold, sans-serif';
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;
`;

export const RegisterButton = styled.button`
  cursor: pointer;
  margin-top: 20px;
  width: 182px;
  height: 44px;

  color: #fc842d;
  background-color: #ffffff;
  border-radius: 30px;
  border: 2px solid #fc842d;
  font-family: 'VerdanaBold, sans-serif';
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;
`;

export const FormInput = styled(Field)`
  display: block;
  height: 20px;
  width: 280px;
  padding: 0px;
  border-bottom: 1px solid #E0E0E0;
  border-top: none;
  border-right: none;
  border-left: none;
  outline: none;
  :focus {
    border-color: #FC842D;
  }
`;



export const Wrapper = styled.div`
  padding-top: 40px;
  width: 285px;
  margin-left: auto;
  margin-right: auto;
`;

export const RegisterHeader = styled.h2`
  font-family: 'VerdanaBold, sans-serif';
  margin-bottom: 60px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #FC842D;
`;