import hero from "../assets/hero.jpg";
import { blogs } from "../data";

function Home() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="hero-overlay">
          <h1>Create Your Blog</h1>
          <p>Share your story with the world</p>
        </div>
      </section>

      <section className="gallery">
        {blogs.map(blog => (
          <img key={blog.id} src={blog.image} alt="gallery" />
        ))}
      </section>

      <section className="newsletter">
        <h2>Subscribe to our Newsletter</h2>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </section>
    </>
  );
}

export default Home;
