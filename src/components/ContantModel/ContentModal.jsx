import  React,{useState,useEffect} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import axios from 'axios';
import { img_500 ,unavailable,unavailableLandscape} from '../../config/config';
import YoutubeIcon  from '@mui/icons-material/YouTube';
import './ContentModal.css'
import Carousel  from '../Carousel/Carousel';

const style = {
  model:{
    display:"flex",
    alignItems:"center",
    justifyContent:'center'
  },
  paper:{
    position:'relative',
    top:'60px',
    left:'70px',
    width:"90%",
    height:"80%",
    backgroundColor:"#39445a",
    border:"1px solid #282c34",
    borderRadius:10,
    color:'#fff',
    p:4

  }
};

export default function ContentModal({children,media_type,id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState()
  const [video, setVideo] = useState()

  const fetchData=async ()=>{
    const {data}  = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=6eb02018677790b0d1f0058b45f3d701&language=en-US`);
    setContent(data)
  }
  const fetchVideo=async ()=>{
    const {data}  = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=6eb02018677790b0d1f0058b45f3d701&language=en-US`);
    setVideo(data.results[0]?.key)
  }

  useEffect(() => {
  fetchData()
  // eslint-disable-next-line
  fetchVideo()
  // eslint-disable-next-line
  }, [])
  
  return (
    <>
      <div onClick={handleOpen} color='inherit' style={{cursor:'pointer'}} className="media">{children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style.paper}>
         {content && (  <div className="ContentModal">
            {/* <img className='ContentModal_portrait' src={content.poster_path?`${img_500}/${content.poster_path}`:unavailable} alt={content.name || content.title} /> */}
            <img className='ContentModal_portrait' src={content.poster_path?`${img_500}/${content.poster_path}`:unavailable} alt={content.name || content.title} />
            <img className='ContentModal_landscape' src={content.backdrop_path?`${img_500}/${content.backdrop_path}`:unavailable} alt={content.name || content.title} />
            <div className="ContentModal_about">
              <span className='ContentModal_title'>
                {content.name || content.title}(
                  {
                    (
                      content.first_air_date || content.release_date || "----"
                    ).substring(0,4)
                  }
                )
              </span>
              {content.tagline &&(
                <i className='tagline'>{content.tagline}</i>
              )}
              <span className='ContentModal_desc'>
                {content.overview}
              </span>
              <div className="">
                <Carousel  media_type={media_type} id={id}  />
              </div>
              <div className="">
                <Button variant='contained' startIcon={<YoutubeIcon/>}
                color={'error'} target="_blank" href={`https://www.youtube.com/watch?v=${video}`}  >
                  Watch the Trailer
                </Button>
              </div>
            </div>
           </div>)}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
