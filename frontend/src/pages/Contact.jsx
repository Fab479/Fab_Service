function Contact() {
  return (
    <main>
      

      <form>
          <h1>Contact Us</h1>
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </main>
  );
}

export default Contact;