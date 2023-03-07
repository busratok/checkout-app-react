const taxRate = 0.18;
const shipping = 25;

const CardTotal = ({ products }) => {
  const subTotal = products.reduce(
    (acc, cur) => acc + cur.price * cur.dampingRate * cur.quantity,
    0
  );

  return (
    <table className="table mx-auto" style={{ width: "18rem" }}>
      <tbody>
        <tr className="text-end">
          <th className="text-start">Subtotal</th>
          <td>
            $<span className="subtotal">{subTotal.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax">{(subTotal * taxRate).toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            $<span className="shipping">{shipping}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $
            <span className="total">
              {(subTotal + shipping + taxRate * subTotal).toFixed(2)}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;
