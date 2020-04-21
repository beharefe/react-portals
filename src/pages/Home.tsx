import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <section>
    <h2>Welcome to our Zoo!</h2>
    <Link to="/animals">See our animals</Link>
  </section>
);
