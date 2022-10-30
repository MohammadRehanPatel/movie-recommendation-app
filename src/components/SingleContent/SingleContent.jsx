import React from 'react'
import './SingleContent.css'
import {img_300,unavailable} from "../../config/config"

const SingleContent = ({id,poster,title,date,media_type,vote_average,overview}) => {
  return (
    <>
    <img src={ poster ? `${img_300}/${poster}` : unavailable} alt={title}  />
    <b className='title'>{title}</b>
    <span>
        {media_type==='tv'?"TV Series":"Movie"}
    </span>
    </>
  )
}

export default SingleContent