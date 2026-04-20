import { blogs } from "../data";
import { Link } from "react-router-dom";
import { useState } from "react";

function Blog() {
  const [search, setSearch] = useState("");

  const filtered = blogs.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h1>Blog Posts</h1>

      <input
        type="text"
        placeholder="Search blogs..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map(blog => (
        <div key={blog.id} className="blog-card">
          <img src={blog.image} alt="blog" />
          <h3>{blog.title}</h3>
          <Link to={`/blog/${blog.id}`} className="read-btn">
  Read More
</Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;
