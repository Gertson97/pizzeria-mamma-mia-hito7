import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container my-5 text-center">
      <div style={{ fontSize: "5rem" }}>🍕🔥</div>
      <h1 className="display-3 fw-bold">404</h1>
      <h4 className="mb-3">¡Ups! Esta pizza se quemó en el horno</h4>
      <p className="text-secondary">
        La página que buscas no existe o fue movida a otra cocina.
      </p>
      <Link to="/" className="btn btn-dark mt-2">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
