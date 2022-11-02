import axios from 'axios'
import React,{useEffect} from 'react'
import { Chip } from '@mui/material'

const Genres = ({selectedGenres,setSelectedGenres,genres,setGenres,type,setPage}) => {
    const fetchGenres = async() =>{
        const {data} = await axios.get(`
        https://api.themoviedb.org/3/genre/${type}/list?api_key=6eb02018677790b0d1f0058b45f3d701&language=en-US`);
        setGenres(data.genres)
    }

    const handleAdd = (genre)=>{
      setSelectedGenres([...selectedGenres,genre]);
      setGenres(genres.filter((g)=>g.id!==genre.id))
      setPage(1);
    }
    const handleRemove = (genre)=>{
      setSelectedGenres(
        selectedGenres.filter((selected)=>selected.id!==genre.id)
      );
      setGenres([...genre,genre])
      setPage(1);
    }

    useEffect(() => {
      fetchGenres();
      return ()=>{
        setGenres({});
      }
      // eslint-disable-next-line
    }, [])

    console.log(genres)
    
  return (
    <>
    <div className="genres" style={{padding:"6px 0"}}>
    {selectedGenres && selectedGenres.map((genre)=>(
      <Chip label={genre.name} key={genre.id} style={{margin:"2px"}} color='error' size='small' clickable onDelete={()=>handleRemove(genre)} />
    ))}
    {genres && genres.map((genre)=>(
      <Chip label={genre.name} key={genre.id} style={{margin:"2px"}} color='secondary' size='small' clickable onClick={()=>handleAdd(genre)} />
    ))}
    </div>
    </>
  )
}

export default Genres