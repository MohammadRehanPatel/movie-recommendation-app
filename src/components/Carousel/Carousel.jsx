import React,{useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
];

const Carousel = ({media_type,id}) => {
    const [credits, setCredits] = useState()

    const fetchCredits=async ()=>{
        const {data}  = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=6eb02018677790b0d1f0058b45f3d701&language=en-US`);
        setCredits(data.cast)
      }
  return (

    <AliceCarousel mouseTracking items={items} />
  );
}

export default Carousel;