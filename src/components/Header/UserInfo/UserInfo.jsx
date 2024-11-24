import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogOutUserMutation } from '../../../redux/auth';
import { logOut } from '../../../redux/authSlice';
import { Exit, Name, Section } from './UserInfo.styled';
import { ExitModal } from '../../ExitModal/ExitModal';

export const BottomSection = ({ name }) => {
  const body = document.querySelector('body');
  const [isModalOpened, setIsModalOpened] = useState(false);

  const onModalClose = () => {
    setIsModalOpened(false);
    body.style.overflow = 'auto'; 
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logOutUser] = useLogOutUserMutation();

  const handleLogout = async () => {
    try {
      await logOutUser();

      dispatch(logOut());

      localStorage.removeItem('token');

      navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };
  
  
  

  return (
    <Section>
      {isModalOpened && (
        <ExitModal onClose={onModalClose} handleLogout={handleLogout} />
      )}
      <Name>{name}</Name>
      <Exit onClick={() => setIsModalOpened(true)} aria-label="Logout">Exit</Exit>
    </Section>
  );
};
