import "../styles/Product.css";
import photo from "../assets/photo.png";

export default function Product(props) {
  const title = props.title;
  const cover = props.cover;
  const description = props.description;
  const id = props.id;

  return (
    <a href={`/house/${id}`} className="link">
      <div className="block-card">
        <img src={cover} alt="Kasa photo" className="kasa-photo_card" />
        <div className="card-title">{title}</div>
        <h1>{description}</h1>
      </div>
    </a>
  );
}
