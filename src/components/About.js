import ABOUT_US_IMG from "../utils/img/aboutUs.jpg";

const About = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={ABOUT_US_IMG} alt="About Us" />
        </div>
        <div className="about-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            tincidunt leo. Maecenas euismod sagittis rutrum. Nulla sed erat
            magna. Fusce consequat luctus est, at placerat quam hendrerit non.
            Morbi rhoncus velit vel turpis mollis fermentum. Curabitur id diam
            ac lacus gravida consectetur non ut turpis.
          </p>
          <p>
            Vestibulum id leo quis ligula tempus vestibulum. Curabitur et ante
            sollicitudin, tempus mi eu, aliquet sem. Nunc at magna a turpis
            rhoncus convallis. Fusce vel mauris eu nunc malesuada tristique ut
            vitae nunc. Integer nec ligula vestibulum, dignissim nisl sit amet,
            fringilla tortor. Vivamus pellentesque auctor fermentum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
