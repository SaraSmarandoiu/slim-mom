import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonWrapper } from '../components/Form/Form.styled';


const NotFound = () => {


  return (
    <>
      <section style={{ padding: '150px 0 50px', background: '#fff' }}>
        <h1 style={{ fontSize: '64px', textAlign: 'center' }}>404</h1>
        <div
          style={{
            height: '400px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            textAlign: 'center',
          }}
        ></div>

        <div style={{ marginTop: '-50px' }}>
          <h3 style={{ fontSize: '34px', textAlign: 'center' }}>
            Not available
          </h3>

          <p style={{ textAlign: 'center' }}>
            this page is not available
          </p>
          <ButtonWrapper
            style={{
              justifyContent: 'center',
              position: 'static',
              display: 'flex',
            }}
          >
            <LinkStyled to={'/'}>Go to Home</LinkStyled>
          </ButtonWrapper>
        </div>
      </section>
    </>
  );
};
export default NotFound;

const LinkStyled = styled(Link)`
  padding: 13px 25px;
  border-radius: 30px;
  margin-top: 20px;
  border: ${p => p.theme.borders.none};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[0]};
  letter-spacing: 0.04em;
  text-decoration: none;

  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.orange};
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  &:hover,
  &:focus {
    background: ${p => p.theme.colors.hover};
  }
`;