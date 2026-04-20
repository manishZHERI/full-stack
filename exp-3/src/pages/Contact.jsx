function Contact() {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>

      <div className="contact-box">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button className="btn-primary">Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
