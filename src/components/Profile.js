import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/Profile.css";
import { Link } from "react-router-dom";
import { deleteUser } from "../features/user";
import UpdateUserForm from "./UpdateUserForm";

const Profile = () => {
  const userList = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };

  return (
    <div className="container">
      {userList.map((user) => (
        <div className="div">
          <button className="show_updateForm">Edit</button>
          <img className="profile__img" src={user.image} alt="" />
          <div className="userinfo">
            <h3>Name:{user.name}</h3>
            <h3>Email:{user.email}</h3>
            <h3>Age:{user.age}</h3>
          </div>
          <UpdateUserForm />
          <button onClick={() => handleDelete(user.id)}>Delete User</button>
          <Link to="/users">
            <button className="view__more">See Others</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Profile;
