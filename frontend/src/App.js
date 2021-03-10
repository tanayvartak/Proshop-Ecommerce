import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
<<<<<<< HEAD
import CartScreen from "./Screens/CartScreen";

=======
>>>>>>> 00bcf477599fafbfa2b5cb93e004f4de3cf5941d

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
<<<<<<< HEAD
          <Route path="/cart/:id?" component={CartScreen} />
=======
>>>>>>> 00bcf477599fafbfa2b5cb93e004f4de3cf5941d
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
