import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Action Files
import {
  getProduct,
  resetGetProduct,
} from 'Redux/actions/productAction/getProductsAction';
import {
  getOrder,
  resetGetOrder,
} from 'Redux/actions/orderAction/getOrderAction';

import { RootStore } from 'Redux/store/store';

const Orders: React.FC = (): JSX.Element => {
  const [quantity, setQuantity] = useState<number | undefined>();
  const [productId, setProductId] = useState<string | undefined>();

  const order = useSelector(({ order }: RootStore) => order);
  const products = useSelector(({ products }: RootStore) => products);
  const dispatch = useDispatch();

  const selectedValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductId(e.target.value);
  };
  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (name === 'quantity') setQuantity(Number(value));
  };
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const getProductRequest = () => {
    const getProductReq = {
      initiatedBy: 'admin',
    };
    return dispatch(getProduct(getProductReq));
  };

  const getOrderRequest = () => {
    const getOrderReq = {
      initiatedBy: 'admin',
    };
    return dispatch(getOrder(getOrderReq));
  };

  useEffect(() => {
    getOrderRequest();
    getProductRequest();
    return () => {
      resetGetOrder();
      resetGetProduct();
    };
  }, []);
  return (
    <div>
      <label htmlFor="quantity">Enter Quantity</label>
      <input
        type="text"
        value={quantity}
        name="quantity"
        onChange={handleChange}
      />
      <label htmlFor="product">Select Product</label>
      <select onChange={selectedValue} value={productId}>
        <option value="">Select Product</option>
        {products.success &&
          products.data?.product.map((product, idx) => (
            <option key={idx} value={product._id}>
              {product.name}
            </option>
          ))}
      </select>
      <input type="button" value="Submit" onClick={handleSubmit} />
      {order.success &&
        order.data?.order.map((order, idx) => (
          <div className="orders" key={idx}>
            {order.productName}:{order.quantity}
          </div>
        ))}
    </div>
  );
};

export default Orders;
