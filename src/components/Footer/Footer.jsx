import logowhite from "../../assets/logo-white.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <span className="logo">
        <img src={logowhite} alt="Kasa photo" className="kasa-logo_white" />
      </span>

      <p className="mention">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
