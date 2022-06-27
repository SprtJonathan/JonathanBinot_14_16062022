import ReactLogo from "../../assets/images/logo.svg";
import WHLogo from "../../assets/images/WealthHealth-logo.png";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <img className="logo" src={WHLogo} alt="" />
        <div>HRnet 2.0 - Réalisé avec React</div>
        <img className="logo" src={ReactLogo} alt="" />
      </footer>
    </div>
  );
}
export default Footer;
