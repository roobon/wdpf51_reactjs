import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  // Inserting a new user into the Database.
  const submitUser = async (event) => {
    try {
      event.preventDefault();
      event.persist();

      axios
        .post(
          `http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/adduser.php`,
          {
            username: userInfo.name,
            useremail: userInfo.email,
            userpass: userInfo.password,
          }
        )
        .then((res) => {
          console.log(res.data);
          navigate(`/`);
          return;
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="col-sm-8">
      <h2 className="bg-dark text-light">Add New User</h2>
      <form className="insertForm" onSubmit={submitUser}>
        <div className="form-group">
          <label htmlFor="_name">Name</label>
          <input
            type="text"
            id="_name"
            name="name"
            onChange={onChangeValue}
            placeholder="Enter name"
            autoComplete="off"
            required
          />
        </div>
        <br /> <br />
        <label htmlFor="_email">Email</label>
        <input
          type="email"
          id="_email"
          name="email"
          onChange={onChangeValue}
          placeholder="Enter email"
          autoComplete="off"
          required
        />
        <br /> <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={onChangeValue}
          placeholder="Enter Password"
          autoComplete="off"
          required
        />
        <input type="submit" value="Insert" />
      </form>
    </div>
  );
};

export default Adduser;
