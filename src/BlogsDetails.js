import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import PreLoader from "./PreLoader";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`https://blogy-api.onrender.com/blogs/${id}`);

  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      Swal.fire({
        title: "Blog deleted successfully!",
        icon: "success",
      });
      navigate("/blogy-blog-app");
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${blog && blog.title} by ${blog && blog.author}`}</title>
      </Helmet>
      <div className="blog-details ">
        <div className="wrapper">
          <div className="navigate-buttton">
            <Link to={"/"} className="back">
              {" "}
              <img
                src={require("./assets/images/angle.svg").default}
                alt="Angle"
                className="angle"
              />
              Back
            </Link>
          </div>
          {isLoading && <PreLoader />}
          {error && <div className="error">{error}</div>}
          {blog && (
            <div className="article">
              <div className="head">
                <h2>{blog.title}</h2>
                <div className="right-box">
                  <span>
                    Written by -<small>{blog.author}</small>
                  </span>
                  <small className="date">{blog.currentDate}</small>
                </div>
              </div>
              <p>{blog.body}</p>
            </div>
          )}
          <div className="button-box">
            <button className="button dlt" onClick={handleDelete}>
              delete
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default BlogDetails;
