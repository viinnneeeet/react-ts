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
import {
  updateProduct,
  resetUpdateProduct,
} from 'Redux/actions/productAction/updateProductAction';
import { RootStore } from 'Redux/store/store';

const Product: React.FC = (): JSX.Element => {
  const [_id, set_Id] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const login = useSelector(({ login }: RootStore) => login);
  const addedProduct = useSelector(({ addProduct }: RootStore) => addProduct);
  const updatedProduct = useSelector(
    ({ updateProduct }: RootStore) => updateProduct
  );
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
  const handleUpdateSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateProductRequest();
  };
  const editProduct = (data: { name: string; price: number; _id: string }) => {
    setName(data.name);
    setPrice(data.price);
    set_Id(data._id);
  };

  const getProductRequest = () => {
    if (login.data?.data.role === 'admin') {
      const getProductReq = {
        initiatedBy: login.data?.data.role,
      };
      return dispatch(getProduct(getProductReq));
    }
  };

  const addProductRequest = () => {
    const addProductReq = {
      initiatedBy: 'admin',
      name,
      price,
    };
    return dispatch(addProduct(addProductReq));
  };

  const updateProductRequest = () => {
    const updateProductReq = {
      _id,
      name,
      price,
    };
    return dispatch(updateProduct(updateProductReq));
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
      resetUpdateProduct();
    };
  }, [products.failed, addedProduct.success, updatedProduct.success]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.success &&
            products.data?.product.map((data, idx) => (
              <tr className="item" key={idx}>
                <td>{idx + 1}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => editProduct(data)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        <h1>Edit Form</h1>
        <label htmlFor="name">Product Name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <label htmlFor="price">Product Price</label>
        <input type="text" name="price" value={price} onChange={handleChange} />
        <input type="button" onClick={handleUpdateSubmit} value="Submit" />
      </div>
      <div>
        <h1>Add Form</h1>
        <label htmlFor="name">Product Name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <label htmlFor="price">Product Price</label>
        <input type="text" name="price" value={price} onChange={handleChange} />
        <input type="button" onClick={handleSubmit} value="Submit" />
      </div>
    </div>
  );
};

export default Product;
