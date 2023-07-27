import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogList = ({ blogs, title }) => {
  return (
    <>
      <Helmet>
        <title>BloGy | The Blog App</title>
      </Helmet>
      <div className="blog-list">
        <div className="wrapper">
          <h2>{title}</h2>
          {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <Link to={`/blog/${blog.id}`}>
                <div className="content-box">
                  <h2>{blog.title}</h2>
                  <p>{blog.body.slice(0, 250)}</p>
                  <div className="bottom">
                    <span>{blog.currentDate}</span>
                    <span>written by -{blog.author}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
