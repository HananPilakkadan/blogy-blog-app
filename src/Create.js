import { useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [currentDate, setCurrentDate] = useState(getDate());
  const navigate = useNavigate();

  function getDate() {
    const today = new Date();
    const month = today.toLocaleString("default", { month: "long" });
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date} ${month} ${year}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, author, body, currentDate };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then(() => {
        setIsPending(false);
        Swal.fire({
          title: "Blog added successfully!",
          text: "Thank You",
          icon: "success",
        });
        navigate("/blogy-blog-app/");
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Add new blog</title>
      </Helmet>
      <div className="create">
        <div className="wrapper">
          <h3>Add new blog</h3>
          <form onSubmit={handleSubmit}>
            <div className="top-container">
              <div className="item">
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="#">Blog Title</label>
              </div>
              <div className="item">
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <label htmlFor="#"> Author</label>
              </div>
            </div>
            <div className="item item-bottom">
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              ></textarea>
              <label htmlFor="#"> Blog Content </label>
            </div>
            <div className="button">
              {!isPending && <button>add blog</button>}
              {isPending && <button>adding blog...</button>}
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Create;
