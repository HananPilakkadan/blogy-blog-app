import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page not found!</title>
      </Helmet>
      <div className="not-found">
        <h4>Sorry...</h4>
        <p>This page is not founded!</p>
        <Link to="/">Back to Home Page</Link>
      </div>
    </>
  );
};

export default NotFound;
