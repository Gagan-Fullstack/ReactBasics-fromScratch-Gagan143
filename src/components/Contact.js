import CONTACT_US_IMG from "../utils/img/contactus.jpg";

const ContactUsPage = () => {
  return (
    <div className="contact">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="FULL NMAE" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="EMAIL ID" />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="DESCRIBE YOU QUERY"
          ></textarea>

          <button type="submit" className="btn-contact">
            Send Message
          </button>
        </form>
      </div>
      <div className="contact-image">
        <img src={CONTACT_US_IMG} alt="Contact" />
      </div>
    </div>
  );
};

export default ContactUsPage;
