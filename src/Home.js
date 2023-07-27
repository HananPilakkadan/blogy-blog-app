import BlogList from "./BlogList";
import Footer from "./Footer";
import PreLoader from "./PreLoader";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("https://blogy-api.onrender.com/blogs");

  return (
    <>
      {isLoading && <PreLoader />}
      <div className="home">
        {error && <div className="error">{error}</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs." />}
      </div>
      {<Footer />}
    </>
  );
};

export default Home;
