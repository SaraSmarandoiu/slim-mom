import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { H2, WrapperWtithFruits } from '../components/Home/Home.styled';
import { WeightForm } from '../components/Form/Form';
import { Box } from '../components/Box';
import Modal from '../components/Modal/Modal';
import { setInfoUser } from '../redux/authSlice';

export const Home = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [userParams, setUserParams] = useState(null);
  const dispatch = useDispatch();

  const body = document.querySelector('body');

  const onModalClose = () => {
    setIsModalOpened(false); // Setăm modalul la închis
    body.style.overflow = 'auto'; // Permitem derularea paginii
  };

  useEffect(() => {
    // Extrage parametrii din URL
    const queryStr = window.location.search
      .replace('?', '')
      .split('&')
      .reduce(function (p, e) {
        var a = e.split('=');
        p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        return p;
      }, {});

    if (!queryStr.name) {
      return; // Dacă nu există parametru 'name', nu facem nimic
    }

    const paramsLocalStorage = JSON.parse(localStorage.getItem('params')) || {};

    const newUser = {
      ...queryStr,
      ...paramsLocalStorage,
    };

    delete newUser.name;  // Ștergem 'name' dacă există
    delete newUser.token; // Ștergem 'token' dacă există
    delete newUser.email; // Ștergem 'email' dacă există

    // Salvăm informațiile utilizatorului în Redux
    dispatch(setInfoUser(paramsLocalStorage));

    setUserParams(newUser); // Actualizăm starea userParams cu noile date
  }, [dispatch]);

  return (
    <WrapperWtithFruits>
      <Box maxWidth={'1280px'} m={'0 auto'}>
        {isModalOpened && (
          <Modal onClose={onModalClose} userParams={userParams} />
        )}
        <H2>Calculate your daily calorie intake right now</H2>
        <WeightForm
          openModal={setIsModalOpened} // Setează starea pentru a deschide modalul
          setUserParams={setUserParams} // Setează parametrii utilizatorului
        />
      </Box>
    </WrapperWtithFruits>
  );
};
