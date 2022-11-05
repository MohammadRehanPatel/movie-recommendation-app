import React from 'react'
import './SingleContent.css'
import {img_300,unavailable} from "../../config/config"
import {Badge} from '@mui/material'
import ContantModal from '../ContantModel/ContentModal' 

const SingleContent = ({id,poster,title,date,media_type,vote_average,overview}) => {
  return (
    <>
    <ContantModal media_type={media_type} id={id}>
    <div >
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
    </ContantModal>
    </>
  )
}

export default SingleContent