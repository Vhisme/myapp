import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error:", error);
    console.log("Error Info:", info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Error occurred in the component.</h1>
          <Link to="/">
            {" "}
            <p>back to our homepage</p>{" "}
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
