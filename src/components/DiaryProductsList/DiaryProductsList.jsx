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
  const products = useSelector(getProducts) || [];  
  const date = useSelector(selectDate);
  const token = useSelector(getToken);

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

  if (!Array.isArray(products) || products.length === 0) {
    return (
      <NoProductsContainer>
        <p>Let's add some products!</p>
      </NoProductsContainer>
    );
  }

  return (
    <List>
      {products.map((product) => (
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
