<<<<<<< HEAD
import React, { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux'
import Product from "../Components/Product";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
// import products from "../products";
import { Row, Col } from "react-bootstrap";
import { listProducts } from '../actions/productActions'


const HomeScreen = () => {
 const dispatch = useDispatch()

 const productList = useSelector(state => state.productList)
 const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);
=======
import React, { useState, useEffect } from "react";
import Product from "../Components/Product";
// import products from "../products";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
>>>>>>> 00bcf477599fafbfa2b5cb93e004f4de3cf5941d

  return (
    <>
      <h1>Latest Products</h1>
<<<<<<< HEAD
      { loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : <Row>
=======
      <Row>
>>>>>>> 00bcf477599fafbfa2b5cb93e004f4de3cf5941d
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
<<<<<<< HEAD
      </Row>}
      
=======
      </Row>
>>>>>>> 00bcf477599fafbfa2b5cb93e004f4de3cf5941d
    </>
  );
};

export default HomeScreen;
