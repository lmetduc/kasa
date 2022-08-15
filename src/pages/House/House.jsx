import "./House.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Accordion from "../../components/Accordion/Accordion";
import Carousel from "../../components/Carousel/Carousel";
import Rating from "../../components/Rating/Rating";
import { useNavigate } from "react-router-dom";

export default function House() {
  const [data, setData] = useState({
    id: "",
    title: "",
    cover: "",
    pictures: [],
    description: "",
    host: { name: "", picture: "" },
    rating: "",
    location: "",
    equipments: [],
    tags: [],
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      const data = await fetch("/data.json");
      // convert the data to json
      const json = await data.json();
      const house = json.find((h) => h.id === id);
      if (house === undefined) {
        navigate("/404");
      }
      setData(house);
    };
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div>
      <Carousel img={data.pictures} />
      <div className="house-details">
        <div className="house-details-row">
          <div className="house-sub-details">
            <div className="house-name-location">
              <h1>{data.title}</h1>
              <span>{data.location}</span>
            </div>
            <div className="house-tags">
              {data.tags.map((tag, i) => (
                <div key={i} className="tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="house-host-details">
            <div className="host-details">
              <span className="host-name">{data.host.name}</span>
              <img alt={`${data.host.name}`} src={data.host.picture} />
            </div>
            <Rating rating={data.rating} />
          </div>
        </div>
        <div className="house-description-equipments">
          <Accordion title="Description" content={data.description} />
          <Accordion title="Équipements" content={data.equipments.map((equipment,i) => <div key={i}>{equipment}</div>)} direction="vertical" />
        </div>
      </div>
    </div>
  );
}
