import { useContext } from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} />

      <div className="card-body border-bottom">
        <h5 className="card-title mb-0">Pizza {name}</h5>
      </div>

      <div className="card-body text-center border-bottom">
        <p className="text-secondary mb-1">Ingredientes:</p>
        <ul className="list-unstyled small mb-0">
          {ingredients.map((ingredient) => (
            <li key={ingredient}>🍕 {ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="card-body text-center">
        <h5 className="mb-3">Precio: ${formatNumber(price)}</h5>
        <div className="d-flex justify-content-between">
          <Link to={`/pizza/${id}`} className="btn btn-outline-dark btn-sm">
            Ver Más 👀
          </Link>
          <button
            className="btn btn-dark btn-sm"
            onClick={() => addToCart({ id, name, price, img })}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
