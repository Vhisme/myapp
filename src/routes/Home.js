import { Link } from "react-router-dom";
import ErrorTest from "../ErrorTest";
import ErrorBoundary from "../ErrorBoundary";

function Home() {
  return (
    <div className="home">
      <ErrorBoundary fallback>
        {" "}
      
        <h1>Altschool exam</h1>
        <p>
          <Link to="/counter">counter app</Link>
        </p>
        <ErrorTest />
        <p>
          {" "}
          <Link to="/">404 page</Link>
        </p>
      </ErrorBoundary>
    </div>
  );
}
export default Home;
