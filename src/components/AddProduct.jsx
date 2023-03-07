import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const initialState = {
  name: "",
  image: "",
  price: 0,
  dampingRate: 0.8,
  quantity: 1,
};
function AddProduct({ getProducts }) {
  const [product, setProduct] = useState(initialState);

  const postProduct = async (newProduct) => {
    const BASE_URL = "https://63f94c8a473885d837cc3b67.mockapi.io/products";
    try {
      await axios.post(BASE_URL, newProduct);
      setProduct(initialState);
    } catch (error) {
      console.log(error);
    }
    getProducts();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = product;
    postProduct(newProduct);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 form-inline" controlId="forProductName">
        <Form.Label className="">Product Name</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          value={product.name}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="forProductPrice">
        <Form.Label>Product Price</Form.Label>
        <Form.Control
          type="number"
          min="1"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          value={product.price}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="forProductQuantity">
        <Form.Label>Product Quantity</Form.Label>
        <Form.Control
          type="number"
          min="1"
          onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
          value={product.quantity}
          required
        />
      </Form.Group>
      <Form.Label htmlFor="basic-url">Product Image</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text>
        <Form.Control
          id="basic-url"
          aria-describedby="basic-addon3"
          type="url"
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
          value={product.image}
          required
        />
      </InputGroup>
      <Button variant="success" type="submit">
        Add To Card
      </Button>
    </Form>
  );
}

export default AddProduct;
