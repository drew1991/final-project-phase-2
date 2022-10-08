import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    department: "",
  });

  const { name, username, email, phone, department } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <button
        type="button"
        className="back back-primary btn-arrow-left"
        style={{
          width: "150px",
          borderRadius: "25px",
          marginLeft: "75%",
        }}
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
      <div className="w-75 mx-auto shadow p-5">
        <h2
          className="text-center mb-4"
          style={{ fontFamily: '"montez","cursive"' }}
        >
          Add A User
        </h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your department Name"
              name="department"
              value={department}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn" style={{ background: "green" }}>
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
