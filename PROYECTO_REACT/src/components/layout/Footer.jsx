import LogoAdalab from "../../images/adalab.png";

import "../../scss/layout/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img className="logoSponsor" src={LogoAdalab} alt="Logo Adalab" />
    </footer>
  );
}

export default Footer;
