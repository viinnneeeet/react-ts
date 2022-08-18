import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Action Files
import {
  getProduct,
  resetGetProduct,
} from 'Redux/actions/productAction/getProductsAction';
import {
  addProduct,
  resetAddProduct,
} from 'Redux/actions/productAction/addProductAction';
import { RootStore } from 'Redux/store/store';

const Product: React.FC = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number | undefined>();

  const addedProduct = useSelector(({ addProduct }: RootStore) => addProduct);
  const products = useSelector(({ products }: RootStore) => products);
  const dispatch = useDispatch();

  function handleChange({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) {
    if (name === 'name') setName(value);
    if (name === 'price') setPrice(Number(value));
  }

  function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    addProductRequest();
  }

  const getProductRequest = () => {
    const getProductReq = {
      initiatedBy: 'admin',
    };
    return dispatch(getProduct(getProductReq));
  };

  const addProductRequest = () => {
    const addProductReq = {
      initiatedBy: 'admin',
      name,
      price,
    };
    return dispatch(addProduct(addProductReq));
  };

  useEffect(() => {
    getProductRequest();

    return () => {
      resetGetProduct();
      resetAddProduct();
    };
  }, []);

  useEffect(() => {
    getProductRequest();

    return () => {
      resetAddProduct();
    };
  }, [addedProduct.success]);

  return (
    <div>
      {products.success &&
        products.data?.product.map((product, idx) => (
          <div className="orders" key={idx}>
            {product.name}:{product.price}
          </div>
        ))}
      <label htmlFor="name">Enter Name</label>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <label htmlFor="price">Enter Price</label>
      <input type="text" name="price" value={price} onChange={handleChange} />
      <input type="button" onClick={handleSubmit} value="submit" />
    </div>
  );
};

export default Product;
