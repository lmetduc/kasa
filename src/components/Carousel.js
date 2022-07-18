import React, {useState} from 'react';
import '../styles/Carousel.css';

export default function Carousel(props) {

    const [slideIndex, setSlideIndex] = useState(0);
    const imgSize = () => {
        const carouselshowImg = document.querySelector('.carousel-container img');
        if(!carouselshowImg){
            return 0;
        }
        return carouselshowImg.width;
    }

    const onNext = () => {
        if(slideIndex === props.img.length - 1){
            setSlideIndex(0)
        } else {
            setSlideIndex(slideIndex + 1)
        }
    }

    const onPrev = () => {
        if(slideIndex === 0){
            setSlideIndex(props.img.length - 1)
        } else {
            setSlideIndex(slideIndex - 1)
        }
    }

    return (
        <div className="carousel">
            <div className="carousel-container" style={{transform: `translateX(-${slideIndex * imgSize()}px)`}}>
            {props.img.map((pictures) => <img className='carousel-container-img' src={pictures} key={pictures}/>)}
            </div>
            <div className='carousel-controls'>
                <img src="../assets/chevron-left.png" className={'chevron'} onClick={onPrev}/>
                <img src="../assets/chevron-right.png" className={'chevron'} onClick={onNext}/>
            </div>
            <div className='carousel-index'>{slideIndex + 1} / {props.img.length}</div>
        </div>
    );
}