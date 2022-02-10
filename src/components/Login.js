import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addUser } from "../features/user";
import "../css/Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("https://picsum.photos/200/300");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addUser({
        id: uuidv4(),
        name,
        email,
        age,
        image,
      })
    );
  };
  return (
    <div className="container">
      <form className="form__container" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="image">Profile Image</label>
        <input
          type="text"
          name="image"
          onChange={(e) => setImage(e.target.value)}
        />
      </form>
      <Link to="/profile">
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </Link>
    </div>
  );
};

export default Login;
