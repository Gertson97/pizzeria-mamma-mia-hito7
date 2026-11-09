import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { formatNumber } from "../utils/formatNumber";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <span className="navbar-brand mb-0 fs-6">Pizzería Mamma Mía!</span>

          <Link to="/" className="btn btn-outline-light btn-sm">
            🍕 Home
          </Link>

          {token ? (
            <>
              <Link to="/profile" className="btn btn-outline-light btn-sm">
                🔓 Profile
              </Link>
              <button className="btn btn-outline-light btn-sm" onClick={logout}>
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light btn-sm">
                🔐 Login
              </Link>
              <Link to="/register" className="btn btn-outline-light btn-sm">
                🔐 Register
              </Link>
            </>
          )}
        </div>

        <Link to="/cart" className="btn btn-outline-info btn-sm">
          🛒 Total: ${formatNumber(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
