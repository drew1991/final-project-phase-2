import React, { useState } from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import { Routes, Route } from "react-router";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

function App(props) {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Routes>
      <Navbar />

      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/users/add" component={AddUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/users/:id" component={User} />
      </Routes>
    </Routes>
  );
}

export default App;
