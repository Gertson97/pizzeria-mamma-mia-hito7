const Profile = () => {
  return (
    <div className="container my-5 text-center" style={{ maxWidth: "500px" }}>
      <h1 className="mb-4">Perfil</h1>
      <p className="fs-5">
        Email: <strong>usuario@ejemplo.com</strong>
      </p>
      <button className="btn btn-dark mt-3">Cerrar sesión</button>
    </div>
  );
};

export default Profile;
