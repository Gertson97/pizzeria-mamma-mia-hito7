const Header = () => {
  return (
    <header
      className="header-pizza d-flex flex-column justify-content-center align-items-center text-center text-white"
      style={{ backgroundImage: "url(/Header.jpg)" }}
    >
      <h1 className="display-5 fw-semibold">¡Pizzería Mamma Mia!</h1>
      <p className="mb-0">¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
};

export default Header;
