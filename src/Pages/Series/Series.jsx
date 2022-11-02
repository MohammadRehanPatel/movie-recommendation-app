import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Genres from '../../components/Genres';
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';
import useGenres from '../../hooks/useGenre';

const Series = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([])
  const [numOfPages, setNumOfPages] = useState()
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreForUrl = useGenres(selectedGenres)

  const fetchSeries = async ()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=6eb02018677790b0d1f0058b45f3d701&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForUrl}`);

    setContent(data.results)
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
   fetchSeries();
   // eslint-disable-next-line
  }, [page,genreForUrl])

  return (
    <>
    <span className='pageTitle'>Series</span>
    <Genres type='tv' selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} genres={genres} setGenres={setGenres} setPage={setPage} />
    <div className="trending">
      {content && content.map((c)=>(
        <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={'tv'} vote_average={c.vote_average} overview={c.overview}    />
      ))}
    </div>
    {numOfPages>1 &&(

      <CustomPagination  setPage={setPage} numOfPages={numOfPages} />
    )}
    </>
  )
}

export default Series