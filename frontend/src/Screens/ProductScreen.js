import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import Rating from "../Components/Rating";
import { listProductDetails } from '../actions/productActions'
import Message from "../Components/Message";
import Loader from "../Components/Loader";

// import products from "../products";

const ProductScreen = ({ history, match }) => {
  
  const [qty, setQty] = useState(0)
  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  },[dispatch,match]) 

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  return (
    <>
      <Link className="btn btn-light my-3">Go back</Link>
      {loading ? <Loader /> : error ? <Message variant='danger'></Message> : (
        <Row>
=======
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../Components/Rating";
import axios from "axios";
// import products from "../products";

const ProductScreen = ({ match }) => {
  // const product = products.find((p) => p._id === match.params.id);
  const [product, setProduct] = useState({})
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)
      setProduct(data)
    }
    fetchProduct()
  },[match]) 
  return (
    <>
      <Link className="btn btn-light my-3">Go back</Link>
      <Row>
>>>>>>> 00bcf477599fafbfa2b5cb93e004f4de3cf5941d
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
<<<<<<< HEAD

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                    <Form.Control as='select' value={qty} onChange={(e) => 
                    setQty(e.target.value)}>
                      {
                      [...Array(product.countInStock).keys()].map((x) => (
                        <option key={x+1} value={x+1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
=======
              <ListGroup.Item>
                <Button
>>>>>>> 00bcf477599fafbfa2b5cb93e004f4de3cf5941d
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
<<<<<<< HEAD
      )}
      
=======
>>>>>>> 00bcf477599fafbfa2b5cb93e004f4de3cf5941d
    </>
  );
};

export default ProductScreen;
