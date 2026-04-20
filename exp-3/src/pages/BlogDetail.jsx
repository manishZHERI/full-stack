import { useParams } from "react-router-dom";
import { blogs } from "../data";

function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>

      <img src={blog.image} alt={blog.title} />

      <div className="blog-content">
        <p>
          This is a complete guide on building a blog using React. In this
          tutorial, you will learn how to structure your project, create
          reusable components, and implement routing using React Router.
        </p>

        <p>
          React makes it easy to build dynamic user interfaces. By breaking
          your UI into components, you can manage state efficiently and
          reuse logic across pages.
        </p>

        <p>
          You will also learn how to style your application using CSS,
          implement dark mode functionality, and make your website fully
          responsive for all devices.
        </p>

        <p>
          By the end of this guide, you will have a fully functional
          blogging website built entirely with React.
        </p>
      </div>
    </div>
  );
}

export default BlogDetail;
