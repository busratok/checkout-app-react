import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CardTotal from "../components/CardTotal";
import Header from "../components/Header";
import ProductCards from "../components/ProductCard";
import ShowHide from "../components/ShowHide";

const Main = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const BASE_URL = "https://63f94c8a473885d837cc3b67.mockapi.io/products";
    try {
      const { data } = await axios(BASE_URL);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <Header />
      <Container
        className={
          products.length
            ? "d-flex flex-column flex-lg-row justify-content-between gap-3"
            : "m-auto form-container"
        }
      >
        <ShowHide getProducts={getProducts} />
        <Container>
          {products &&
            products.map((product) => (
              <ProductCards
                key={product.id}
                product={product}
                getProducts={getProducts}
              />
            ))}
          {products.length ? <CardTotal products={products} /> : null}
        </Container>
      </Container>
    </div>
  );
};

export default Main;
