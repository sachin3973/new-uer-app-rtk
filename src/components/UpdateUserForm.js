import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/user";
import "../css/UpdateUserForm.css";

const UpdateUserForm = () => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newImage, setNewImage] = useState("https://picsum.photos/200/300");

  const userList = useSelector((state) => state.user.value);

  useEffect(() => {
    // pass
  });

  const dispatch = useDispatch();
  console.log(userList);

  const handleUpdate = (id, event) => {
    event.preventDefault();
    console.log("UPDATE");
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
    <div className="user__updateBlock menu__hide">
      {userList.map((user) => (
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
          <button
            type="submit"
            onClick={(event) => handleUpdate(user.id, event)}
          >
            Save Updates
          </button>
        </form>
      ))}
    </div>
  );
};

export default UpdateUserForm;
