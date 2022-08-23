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
import {
  addOrder,
  resetAddOrder,
} from 'Redux/actions/orderAction/addOrderAction';
import { RootStore } from 'Redux/store/store';

const Orders: React.FC = (): JSX.Element => {
  const [quantity, setQuantity] = useState<number>(0);
  const [productId, setProductId] = useState<string>('');

  const login = useSelector(({ login }: RootStore) => login);
  const order = useSelector(({ order }: RootStore) => order);
  const addedOrder = useSelector(({ addOrder }: RootStore) => addOrder);
  const products = useSelector(({ products }: RootStore) => products);
  const dispatch = useDispatch();

  const selectedValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductId(e.target.value);
  };
  const editOrder = (quantity: number, productId: string) => {
    setQuantity(quantity);
    setProductId(productId);
  };
  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (name === 'quantity') setQuantity(Number(value));
  };

  const handleAddSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    addOrderRequest();
  };
  const handleEditSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const getProductRequest = () => {
    if (login.data?.user.role) {
      const getProductReq = {
        initiatedBy: login.data?.user.role,
      };
      return dispatch(getProduct(getProductReq));
    }
  };

  const getOrderRequest = () => {
    if (login.data?.user.role) {
      const getOrderReq = {
        initiatedBy: login.data?.user.role,
      };
      return dispatch(getOrder(getOrderReq));
    }
  };
  const addOrderRequest = () => {
    if (login.data?.user.role === 'admin') {
      const addOrderReq = {
        initiatedBy: login.data?.user.role,
        quantity,
        productId,
      };
      return dispatch(addOrder(addOrderReq));
    }
  };

  useEffect(() => {
    getOrderRequest();
    getProductRequest();
    return () => {
      resetGetOrder();
      resetGetProduct();
    };
  }, []);

  useEffect(() => {
    if (addedOrder.success) {
      setQuantity(0);
      setProductId('');
    }
    return () => {
      resetAddOrder();
    };
  }, [addedOrder.success]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {order.success &&
            order.data?.orders.map((data, idx) => (
              <tr className="item" key={idx}>
                <td>{idx + 1}</td>
                <td>{data.productName}</td>
                <td>{data.price}</td>
                <td>{data.quantity}</td>
                <td>{data.totalPrice}</td>
                <td>
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => editOrder(data.quantity, data.productId)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <h1>Update Order</h1>
      <form>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          name="quantity"
          placeholder="Enter Quantity"
          value={quantity}
          onChange={handleChange}
        />
        <input type="button" value="Submit" onClick={handleEditSubmit} />
      </form>

      <h1>Add Order</h1>
      <form>
        <label htmlFor="product">Select Product</label>
        <select
          name="product"
          id="product"
          value={productId}
          onChange={selectedValue}
        >
          <option value="">Select Product</option>

          {products.data?.product.map((product, idx) => (
            <option value={product._id} key={idx}>
              {product.name}
            </option>
          ))}
        </select>
        <label htmlFor="quantity">Enter Quantity</label>
        <input
          type="text"
          name="quantity"
          value={quantity}
          placeholder="Enter Quantity"
          onChange={handleChange}
        />
        <input type="button" value="Submit" onClick={handleAddSubmit} />
      </form>
    </div>
  );
};

export default Orders;
