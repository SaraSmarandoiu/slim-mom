import { Box } from '../Box';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import {
  NameInput,
  GramsInput,
  Button,
  FormWrapper,
  SearchBox,
  SearchItem,
  NameError,
  GramsError,
  SearchItemNotRecommended
} from './DiaryAddProductForm.styled';
import AddIcon from "../../images/svg/add.svg";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../../redux/authSelectors';
import { selectDate } from '../../redux/productsSelectors';
import { setProducts } from '../../redux/productsSlice';
import { apiAddMyProduct, apiGetSearchProducts } from '../../services/api/api';
import { getUserInfo } from '../../redux/authSelectors';

const schema = yup.object().shape({
  productName: yup
    .string()
    .required('Name is required field'),
  productWeight: yup
    .number('Grams must be a number')
    .typeError('Grams must be a number')
    .required('Grams is required field')
});

export const DiaryAddProductForm = ({ onClose, isModalOpened }) => {
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  const mobile = useMediaQuery({ query: '(max-width: 426px)' });
  const initialValues = {
    productName: '',
    productWeight: '',
  };
  const [searchProducts, setSearchProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const userInfo = useSelector(getUserInfo);

  const search = async (value) => {
    console.log('Searching for:', value);
    try {
      const result = await apiGetSearchProducts(value);
      console.log('Search result:', result);
      setSearchProducts(result || []);
      setVisible(result.length > 0);
    } catch (error) {
      console.error('Search error:', error);
      setSearchProducts([]);
      setVisible(false);
    }
  };

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  };

  const handleSubmit = async (values, { resetForm }) => {
    const { productName, productWeight } = values;
    console.log('Submitting:', values);
    const body = {
      productName,
      productWeight: isNaN(parseInt(productWeight)) ? 0 : parseInt(productWeight),
      date
    };
    try {
      const result = await apiAddMyProduct(body, token, date, { headers });
      console.log('Add product result:', result);
      if (result.length > 0) {
        dispatch(setProducts(result));
      } else {
        dispatch(setProducts([]));
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert("Oops.. Product not found!");
    }
    mobile && onClose();
    resetForm();
    setVisible(false); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "productName" && value.length > 1) {
      search(value);
    } else {
      setVisible(false);
      setSearchProducts([]);
    }
  };

  const handleClick = (setFieldValue, title) => {
    setVisible(false);
    setFieldValue("productName", title);
  };

  return (
    <Box position="relative" my="40px">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ setFieldValue }) => (
          <Box>
            <FormWrapper onChange={handleChange}>
              <NameInput
                type="text"
                placeholder="Enter product name"
                name="productName"
                autoComplete="off"
              />
              <ErrorMessage name='productName' component={NameError} />
              <GramsInput
                type="number"
                placeholder="Grams"
                name="productWeight"
                autoComplete="off"
              />
              <ErrorMessage name='productWeight' component={GramsError} />
              {mobile ? (
                <Button type="submit">Add</Button>
              ) : (
                <Button type="submit">
                  <img src={AddIcon} alt="add product" />
                </Button>
              )}
            </FormWrapper>
            {visible && (
              <SearchBox>
                {searchProducts.map((product) => {
                  const isNotRecommended =
                    userInfo?.notAllowedProductsAll &&
                    Array.isArray(userInfo.notAllowedProductsAll) &&
                    userInfo.notAllowedProductsAll.find((el) => el === product.title.ua);

                  return isNotRecommended ? (
                    <SearchItemNotRecommended
                      key={product._id}
                      onClick={() => handleClick(setFieldValue, product.title.ua)}
                    >
                      {product.title.ua}
                    </SearchItemNotRecommended>
                  ) : (
                    <SearchItem
                      key={product._id}
                      onClick={() => handleClick(setFieldValue, product.title.ua)}
                    >
                      {product.title.ua}
                    </SearchItem>
                  );
                })}
              </SearchBox>
            )}
          </Box>
        )}
      </Formik>
    </Box>
  );
};
