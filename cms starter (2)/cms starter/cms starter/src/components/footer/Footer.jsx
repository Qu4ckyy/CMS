import "./Footer.scss";

const Footer = ({ footerText }) => {
  return (
    <div className="footer-container container">
      <h2>
        Made by <span>#TechniSchools</span>
        {footerText && ` - ${footerText}`}
      </h2>
    </div>
  );
};

export default Footer;
