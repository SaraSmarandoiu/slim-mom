import React, { useState } from 'react';
import { Formik, ErrorMessage, Form } from 'formik';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useLogInUserMutation } from '../redux/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/authSlice';

import { Error, Input, List } from '../components/Form/Form.styled';
import {
  ButtonWrapper,
  H2,
  Wrapper,
} from '../components/RegisterPage/RegisterPage.styled';
import { WrapperWithFruits } from '../components/RegisterPage/RegisterPage.styled';
import { Loader } from '../components/Loader/Loader';

import { routes } from '../components/Routes/routes';
import { LoginButton } from '../components/LoginPage/LoginPage.styled';
import { RegisterButton } from '../components/LoginPage/LoginPage.styled';

const schema = yup.object().shape({
  email: yup.string().email().required('Email is required field'),
  password: yup
    .string()
    .min(6, 'Password must be more than or equal to 6 letters')
    .max(16, 'Password must be more than or equal to 16 letters')
    .required('Password is required field'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginUser, { status }] = useLogInUserMutation();
  const dispatch = useDispatch();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const user = await loginUser(values).unwrap();
      dispatch(setUser(user));
      navigate(routes.diary);
      resetForm();
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  const handleClick = () => {
    navigate(routes.register);
  };
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <WrapperWithFruits>
      {status === 'pending' && <Loader />}
      <Wrapper style={{ paddingBottom: '255px' }}>
        <H2>Log In</H2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          {({ values }) => (
            <Form>
              <List style={{ display: 'grid', gridTemplateColumns: 'revert' }}>
                <li>
                  <label>
                    <Input type="email" name="email" placeholder="Email *" />
                    <ErrorMessage name="email" component={Error} />
                    {status === 'rejected' && (
                      <Error>Email or password is wrong</Error>
                    )}
                  </label>
                </li>

                <li>
                  <label style={{ position: 'relative' }}>
                    <Input
                      type={isShowPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Password *"
                      maxLength="16"
                    />
                    {isShowPassword ? (
                      <AiFillEyeInvisible
                        onClick={handleShowPassword}
                        style={{
                          position: 'absolute',
                          top: '0px',
                          left: '250px',
                          color: '#FC842D',
                        }}
                      />
                    ) : (
                      <AiFillEye
                        onClick={handleShowPassword}
                        style={{
                          position: 'absolute',
                          top: '0px',
                          left: '250px',
                          color: '#FC842D',
                        }}
                      />
                    )}
                    <ErrorMessage name="password" component={Error} />
                    {status === 'rejected' && (
                      <Error>Email or password is wrong</Error>
                    )}
                  </label>
                </li>
              </List>
              <ButtonWrapper>
                <LoginButton type="submit" full={true} style={{ width: '200px' }}>
                  Log In
                </LoginButton>
                <div onClick={handleClick}>
                  <RegisterButton type="button" full={false}>
                    Register
                  </RegisterButton>
                </div>
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </WrapperWithFruits>
  );
};

export default LoginPage;
