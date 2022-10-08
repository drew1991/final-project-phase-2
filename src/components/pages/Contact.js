import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../layout/footer";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="container-contact">
      <div className="my-contact">
        <h1 style={{ fontFamily: '"montez","cursive"', color: "white" }}>
          Contact Page
        </h1>

        <form className="my-form">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small
              id="emailHelp"
              class="form-text text-muted"
              style={{ color: "white" }}
            >
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            style={{ width: "auto" }}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="my-contact">
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
        <h1 style={{ fontFamily: '"montez","cursive"', color: "white" }}>
          Howa can i help
        </h1>
        <input
          className="input"
          type="textarea"
          placeholder="Type your query here"
          style={{
            width: "500px",
            height: "400px",
            borderRadius: "25px",
          }}
        />
        <button style={{ width: "100px", borderRadius: "25px" }}>
          Post Query
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
