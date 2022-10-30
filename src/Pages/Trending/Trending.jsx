import axios from 'axios'
import React,{useState,useEffect} from 'react'
import SingleContent from '../../components/SingleContent/SingleContent';

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending =async ()=>{
   const {data} = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=6eb02018677790b0d1f0058b45f3d701');
   
    setContent(data.results);
  }

  useEffect(() => {
    
      fetchTrending();
  }, [])
  
  return (
    <>
    <span className='pageTitle'>Trending</span>
    <div className="trending">
      {content && content.map((c)=>(
        <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={c.media_type} vote_average={c.vote_average} overview={c.overview}    />
      ))}
    </div>
    </>
  )
}

export default Trending