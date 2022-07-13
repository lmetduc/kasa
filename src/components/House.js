import Product from "./Product";
import "../styles/House.css";
import Banner from "./Banner";
import banner from "../assets/banner.png";
import star from "../assets/star.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function House() {
  const [data, setData] = useState(null);
  let {id} = useParams();

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      const data = await fetch("/data.json");
      // convert the data to json
      const json = await data.json();
      const house = json.find(h => h.id === id);
      setData(house);
    };
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div>
      <Banner banner={banner} size="medium" />
      <div className="product-list">
        {data && <h1>{data.title}</h1>}
      </div>
    </div>
  );
}
