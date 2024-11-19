import React, { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Snowfall from 'react-snowfall';

import { Wrapper, WrapperAll, Button } from '../components/DiaryPage/DiaryPage.styled';
import { DiaryAddProductForm } from '../components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from '../components/DiaryDateCalendar/DiaryDateCalendar';
import { DiaryProductsList } from '../components/DiaryProductsList/DiaryProductsList';
import { RightSideBar } from '../components/RightSideBar/RightSideBar';
import { DiaryModal } from '../components/DiaryModal/DiaryModal';
import AddIcon from '../images/svg/add.svg';
import { Box } from '../components/Box';
import { ThemeContext } from '../components/Context/Context';
import { getProducts } from '../redux/productsSelectors';
import { setProducts } from '../redux/productsSlice';
import { apiListMyProducts } from '../services/api/api';
import { getToken } from '../redux/authSelectors';

const useLockBodyScroll = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLocked]);
};

const DiaryPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const mobile = useMediaQuery({ query: '(max-width: 426px)' });
  const { isChristmas } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const date = useSelector((state) => state.products.date);
  const products = useSelector(getProducts) || [];
  useLockBodyScroll(isModalOpened);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!date || !token) return;

      try {
        const result = await apiListMyProducts(date, token);
        if (result && result.length > 0) {
          dispatch(setProducts(result[0].productInfo));
        } else {
          dispatch(setProducts([]));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        dispatch(setProducts([]));
      }
    };

    fetchProducts();
  }, [date, token, dispatch]);

  const onModalOpen = () => {
    setIsModalOpened(true);
  };

  const onModalClose = () => {
    setIsModalOpened(false);
  };

  return (
    <WrapperAll>
      {isChristmas && <Snowfall />}
      <Wrapper>
        <DiaryDateCalendar />
        {!mobile && <DiaryAddProductForm />}
        <Box textAlign="center">
          {Array.isArray(products) && products.length > 0 ? (
            <DiaryProductsList />
          ) : (
            <p style={{ textAlign: 'center', marginTop: '20px' }}>
              No products added. Start adding your products now!
            </p>
          )}
          {mobile && (
            <Button onClick={onModalOpen}>
              <img src={AddIcon} alt="add product" />
            </Button>
          )}
        </Box>
        {isModalOpened && <DiaryModal onClose={onModalClose} />}
      </Wrapper>
      <RightSideBar />
    </WrapperAll>
  );
};

export default DiaryPage;
