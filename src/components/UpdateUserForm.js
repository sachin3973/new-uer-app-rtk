import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/user";
import "../css/UpdateUserForm.css";

const UpdateUserForm = () => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newImage, setNewImage] = useState("");

  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(
      updateUser({
        id: user.id,
        name: newName,
        email: newEmail,
        age: newAge,
        image: newImage,
      })
    );
  };
  return (
    <div className="user__updateBlock">
      <form onSubmit={() => handleUpdate()}>
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
        <button type="submit" onClick={() => handleUpdate}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
