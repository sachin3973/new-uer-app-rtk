import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/Users.css";
import { deleteUser, editUser } from "../features/user";
import UpdateUserForm from "./UpdateUserForm";

const Users = () => {
  const userList = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };

  const handleEdit = (id) => {
    dispatch(editUser({ id }));
  };
  return (
    <div className="users__container">
      {userList.map((user) => (
        <div className="singleuser__container">
          <button
            className="show_updateMenu"
            onClick={() => handleEdit(user.id)}
          >
            Edit
          </button>
          <img className="userList__img" src={user.image} alt="" />
          <div className="userinfo">
            <h3>Name:{user.name}</h3>
            <h3>Email:{user.email}</h3>
            <h3>Age:{user.age}</h3>
          </div>
          <div className="user__updateBlock">
            <UpdateUserForm id={user.id} />
          </div>
          <button onClick={() => handleDelete(user.id)}>Delete User</button>
        </div>
      ))}
    </div>
  );
};

export default Users;
