import "../styles/Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const nav1 = "Accueil";
  const nav2 = "A propos";

  return (
    <div className="kasa-head">
      <div className="kasa-banner">
        <a href="/" >
        <img src={logo} alt="Kasa" className="kasa-logo" />
        </a>
        <div className="kasa-block">
          <a className="kasa-nav" href="/">
            {nav1}
          </a>
          <a className="kasa-nav" href="/about">
            {nav2}
          </a>
        </div>
      </div>
    </div>
  );
}
