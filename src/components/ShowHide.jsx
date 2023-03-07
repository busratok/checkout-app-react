import { useState } from "react";
import Button from "react-bootstrap/Button";
import AddProduct from "./AddProduct";

function ShowHide({ getProducts }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="container">
      <div className="text-center">
        <Button variant="warning" onClick={() => setToggle(!toggle)}>
          {toggle ? "Hide Product Bar" : "Show Product Bar"}
        </Button>
      </div>

      {toggle && <AddProduct getProducts={getProducts} />}
    </div>
  );
}

export default ShowHide;
