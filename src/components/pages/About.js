import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../layout/footer";

const About = () => {
  const history = useHistory();
  return (
    <div className="container-main">
      <button
        type="button"
        className="back back-primary btn-arrow-left"
        style={{
          width: "150px",
          borderRadius: "25px",
          marginLeft: "80%",
          marginTop: "5px",
        }}
        onClick={() => history.goBack()}
      >
        Go Back
      </button>
      <div className="py-4">
        <h1
          className="page-abt"
          style={{ fontFamily: '"montez","cursive"', marginLeft: "70px" }}
        >
          About Page
        </h1>

        <p
          className="lead"
          style={{ color: "blue", marginLeft: "50px", marginRight: "30" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum
          hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt
          nam accusantium? Soluta cupiditate, accusamus commodi praesentium
          laborum dolorum libero maiores!
        </p>

        <p
          className="lead"
          style={{ color: "blue", marginLeft: "50px", marginRight: "50" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum
          hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt
          nam accusantium? Soluta cupiditate, accusamus commodi praesentium
          laborum dolorum libero maiores!
        </p>
        <p
          className="lead"
          style={{ color: "blue", marginLeft: "70px", marginRight: "170" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque rerum
          hic ab veniam reiciendis cum repudiandae, voluptate explicabo nesciunt
          nam accusantium? Soluta cupiditate, accusamus commodi praesentium
          laborum dolorum libero maiores!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
