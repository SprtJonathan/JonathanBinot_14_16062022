import HRnetLogo from "../../assets/images/hrnet-logo.svg";

function Header() {
  return (
    <div className="title">
      <img className="logo" src={HRnetLogo} alt="" height="150px" width="386px"  />
    </div>
  );
}

export default Header;
