import Product from "./Product";
import "../styles/Home.css";
import Banner from "./Banner";
import banner from "../assets/banner.png";
import { useState, useEffect } from "react";

export default function Home() {
  // set state with the result
  const [data, setData] = useState([]);

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      const data = await fetch("/data.json");
      // convert the data to json
      const json = await data.json();

      setData(json);
    };
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  return (
    <div>
      <Banner banner={banner} />
      <div className="product-list">
        <div className="product-background">
          {data.map((d, i) => (
            <Product title={d.title} key={i} cover={d.cover} id={d.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}
