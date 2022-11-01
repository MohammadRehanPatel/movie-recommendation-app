import React from 'react'
import './SingleContent.css'
import {img_300,unavailable} from "../../config/config"
import {Badge} from '@mui/material'

const SingleContent = ({id,poster,title,date,media_type,vote_average,overview}) => {
  return (
    <>
    <div className="media">
    <Badge badgeContent={vote_average} color={vote_average>6?'primary':'secondary'} />
    <img className='poster' src={ poster ? `${img_300}/${poster}` : unavailable} alt={title}  />
    <b className='title'>{title}</b>
    <span className='sunTitle'>
        {media_type==='tv'?"TV Series":"Movie"}
    </span>
    <span className='sunTitle'>
        {date}
    </span>
    </div>
    </>
  )
}

export default SingleContent