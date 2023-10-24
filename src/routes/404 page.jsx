import React from 'react';
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">
        {" "}
        <p>back to our homepage</p>{" "}
      </Link>
    </div>
  );
};

export default Notfound;
