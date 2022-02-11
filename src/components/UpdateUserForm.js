import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/user";
import "../css/UpdateUserForm.css";

const UpdateUserForm = ({ id }) => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newImage, setNewImage] = useState("https://picsum.photos/200/300");

  const userList = useSelector((state) => state.user.value);
  console.log(userList);

  useEffect(() => {}, []);

  const dispatch = useDispatch();

  const handleUpdate = (id, event) => {
    event.preventDefault();

    dispatch(
      updateUser({
        id: id,
        name: newName,
        email: newEmail,
        age: newAge,
        image: newImage,
      })
    );
  };
  return (
    <div className="user__updateBlock">
      <form>
        <input
          type="text"
          placeholder="Update User Name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Update User Email"
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Update Age"
          onChange={(e) => setNewAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Update Profile Picture"
          onChange={(e) => setNewImage(e.target.value)}
        />
        <button type="submit" onClick={(event) => handleUpdate(id, event)}>
          Save Updates
        </button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
