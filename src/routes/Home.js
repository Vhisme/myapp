import { Link } from "react-router-dom";
import ErrorTest from "../ErrorTest";
import ErrorBoundary from "../ErrorBoundary";

function Home() {
  return (
    <>
      <ErrorBoundary fallback>
        {" "}
        
        <h1>Welcome to our Counter Web...</h1>
        <p>
          Please click out <Link to="/counter">counter app</Link>
        </p>
        <ErrorTest />
        <p>
          check out a 404 page here by clicking{" "}
          <Link to="/">404 page</Link>
        </p>
      </ErrorBoundary>
    </>
  );
}
export default Home;
