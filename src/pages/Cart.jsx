import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { formatNumber } from "../utils/formatNumber";

const Cart = () => {
  const { cart, increase, decrease, total } = useContext(CartContext);
  const { token } = useContext(UserContext);

  return (
    <div className="container my-5" style={{ maxWidth: "700px" }}>
      <h5 className="mb-4">Detalles del pedido:</h5>

      {cart.length === 0 && (
        <p className="text-secondary">Tu carrito está vacío.</p>
      )}

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex align-items-center justify-content-between mb-3"
        >
          <div className="d-flex align-items-center gap-3">
            <img
              src={pizza.img}
              alt={`Pizza ${pizza.name}`}
              width="50"
              height="40"
              style={{ objectFit: "cover" }}
            />
            <span>{pizza.name}</span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <span>${formatNumber(pizza.price)}</span>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => decrease(pizza.id)}
            >
              -
            </button>
            <strong>{pizza.count}</strong>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => increase(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h3 className="mt-4">Total: ${formatNumber(total)}</h3>
      <button className="btn btn-dark mt-2" disabled={!token}>
        Pagar
      </button>
    </div>
  );
};

export default Cart;
