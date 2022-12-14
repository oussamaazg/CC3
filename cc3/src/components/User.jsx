import React from "react";
import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="userCard">
      <img src={user.image} alt={user.id} />
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <button onClick={() => navigate(`/Detailuser/${user.id}`)}>
        Detail User
      </button>
      <button onClick={() => navigate(`/Listuser/${user.id}`)}>
        Panier
      </button>
    </div>
  );
};

export default User;
