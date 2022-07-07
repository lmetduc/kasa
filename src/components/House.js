import Product from './Product';
import "../styles/House.css";
import Banner from './Banner';
import banner from '../assets/banner.png';
import star from '../assets/star.png';
import {useState,useEffect} from 'react';

export default function House(props) {
	const [data ,setData] = useState([]);


	useEffect(() => {
		// declare the async data fetching function
		const fetchData = async () => {

		  const data = await fetch('http://localhost:3000/data.json');
		  // convert the data to json
		  const json = await data.json();

		  setData(json);

		}
		// call the function
		fetchData()
		  // make sure to catch any error
		  .catch(console.error);
	  }, [])

	const title =props.title;
	const description = props.description;
	return (
		<div>
			<Banner banner={banner} size="medium" />
			<div className='product-list'>
			{data.map((d,i) => <Product title={d.title} key={i} description={d.description} />)}
			</div>
		</div>
	)
}