import "../styles/Banner.css";

export default function Banner(props) {
  const banner = props.banner;
  const size = props.size;
    return (
        <div className="kasa-picture">
      <img src={banner} alt="Kasa Banner" className={`kasa-photo ${size}`}/>
        <p className="text-banner">Chez vous, partout et ailleurs</p>
      </div>
    )
}