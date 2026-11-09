import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber";

const Pizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!res.ok) {
          navigate("/404");
          return;
        }
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar la pizza:", error);
      }
    };

    getPizza();
  }, [id, navigate]);

  if (!pizza) {
    return <p className="text-center my-5">Cargando pizza...</p>;
  }

  return (
    <div className="container my-5" style={{ maxWidth: "900px" }}>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={pizza.img}
              alt={`Pizza ${pizza.name}`}
              className="img-fluid rounded-start w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title">Pizza {pizza.name}</h3>
              <hr />
              <p className="card-text">{pizza.desc}</p>

              <h6>Ingredientes:</h6>
              <ul className="list-unstyled">
                {pizza.ingredients.map((ingredient) => (
                  <li key={ingredient}>🍕 {ingredient}</li>
                ))}
              </ul>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <h4 className="mb-0">Precio: ${formatNumber(pizza.price)}</h4>
                <button className="btn btn-dark">Añadir 🛒</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
