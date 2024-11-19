import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DiaryProductsListItem } from '../DiaryProductsListItem/DiaryProductsListItem';
import { List, NoProductsContainer } from './DiaryProductsList.styled';
import { getProducts, selectDate } from '../../redux/productsSelectors';
import { getToken } from '../../redux/authSelectors';
import { setProducts } from '../../redux/productsSlice';
import { apiListMyProducts } from '../../services/api/api';

export const DiaryProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const date = useSelector(selectDate);
  const token = useSelector(getToken);

  // Verificare de siguranță pentru produse
  const safeProducts = Array.isArray(products) && products !== null ? products : [];

  useEffect(() => {
    const fetchProducts = async () => {
      if (!date || !token) return; // Asigură-te că datele necesare sunt disponibile

      try {
        const result = await apiListMyProducts(date, token);
        if (result && result.length > 0) {
          dispatch(setProducts(result[0].productInfo));
        } else {
          dispatch(setProducts([]));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        dispatch(setProducts([])); // Asigurare că produsele sunt golite în caz de eroare
      }
    };

    fetchProducts();
  }, [date, dispatch, token]);

  // Verificare suplimentară pentru a preveni erorile
  if (!safeProducts || !Array.isArray(safeProducts) || safeProducts.length === 0) {
    return (
      <NoProductsContainer>
        <p>Let's add some products!</p>
      </NoProductsContainer>
    );
  }

  return (
    <List className={safeProducts.length > 4 ? null : 'hidden'}>
      {safeProducts.map((product) => (
        product && product._id ? (
          <DiaryProductsListItem
            key={product._id}
            id={product._id}
            name={product.productName}
            grams={product.productWeight}
            calories={product.productCalories}
          />
        ) : null
      ))}
    </List>
  );
};
