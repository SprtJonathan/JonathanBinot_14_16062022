import ReactLogo from "../../assets/images/logo.svg";
import WHLogo from "../../assets/images/WealthHealth-logo.webp";

function Footer() {
  return (
    <footer className="footer">
      <img className="logo" src={WHLogo} alt="" height="150px" width="150px" />
      <div>HRnet 2.0 - Réalisé avec React</div>
      <img
        className="logo"
        src={ReactLogo}
        alt=""
        height="150px"
        width="150px"
      />
    </footer>
  );
}
export default Footer;
