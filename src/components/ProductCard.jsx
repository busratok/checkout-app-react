import axios from "axios";
// import { useState } from "react";
import { Button, Card } from "react-bootstrap";

const ProductCards = ({ product, getProducts }) => {
  const { name, price, image, quantity, id, dampingRate } = product;
  //   const [productQuantity, setProductQuantity] = useState(quantity);
  const BASE_URL = "https://63f94c8a473885d837cc3b67.mockapi.io/products";
  //   const handleDecrement = async (productQuantity) => {
  //     setProductQuantity(productQuantity - 1);
  //     if (productQuantity === 0) {
  //       deleteProduct(id);
  //     } else {
  //     try {
  //       await axios.patch(`${BASE_URL}/${id}`, {
  //         quantity: productQuantity,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const deleteProduct = async () => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getProducts();
  };

  const handleMinus = async () => {
    if (quantity > 1) {
      try {
        await axios.put(`${BASE_URL}/${id}`, {
          ...product,
          quantity: quantity - 1,
        });
      } catch (error) {
        console.log(error);
      }
      getProducts();
    } else {
      deleteProduct();
    }
  };

  const handlePlus = async () => {
    try {
      await axios.put(`${BASE_URL}/${id}`, {
        ...product,
        quantity: quantity + 1,
      });
    } catch (error) {
      console.log(error);
    }
    getProducts();
  };

  return (
    <Card className="mx-auto mb-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          £{price * dampingRate}
          <span className="h5 text-dark text-decoration-line-through">
            {" "}
            £{price}
          </span>
        </Card.Text>
        <Card.Text className="d-flex justify-content-center align-items-center gap-3 border border-dark p-2">
          <Button variant="secondary btn-sm" onClick={handleMinus}>
            -
          </Button>
          {quantity}
          <Button variant="secondary btn-sm" onClick={handlePlus}>
            +
          </Button>
        </Card.Text>
        <Button
          variant="danger"
          className="w-100"
          onClick={() => deleteProduct()}
        >
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCards;
