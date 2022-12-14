// import necessary files
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../layout/footer";
import Pagination from "../pagination/pagination";
import Clock from "../Clock";
import useLocalStorage from "use-local-storage";
// create home component
const Home = () => {
  // create usestate
  const [users, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  // fetch data
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/users");
    setUser(result.data.reverse());
  };
  // function for deleting users
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    loadUsers();
  };

  return (
    // return jsx
    <div className="container-main">
      <div className="py-4">
        <div className="homie">
          <h1 className="home-page">Home Page</h1>
          <Link
            className="btn btn-outline-light"
            to="/users/add"
            style={{ background: "green", borderRadius: "25px" }}
          >
            Add Employee
          </Link>
        </div>

        <table class="table border shadow">
          <thead
            class="thead"
            // overrride global style created
            style={{
              background: "radial-gradient(circle, #5c0067 0%, #00d4ff 100%)",
              borderTopRadius: "25px",
            }}
          >
            {/* create table and display content from json */}
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>

                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          total={500}
          limit={17}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      <i onClick={switchTheme} class="fas fa-toggle-on"></i>
      <Footer />
    </div>
  );
};

export default Home;
