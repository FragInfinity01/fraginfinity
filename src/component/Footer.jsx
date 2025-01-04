import fragBanner from ".././assets/img/Footer.png";
import Version from "./Version";

function Footer() {
  return (
    <div className="footer-img">
      <img src={fragBanner} alt="footer" />
      <p>FragInfinity &copy; {new Date().getFullYear()} All Rights Reserved </p>
      <Version />
    </div>
  );
}

export default Footer;
