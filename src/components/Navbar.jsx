import  React,{useEffect} from 'react';
import {Box,BottomNavigation,BottomNavigationAction} from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import  TvIcon from '@mui/icons-material/Tv';
import {useNavigate} from 'react-router-dom'
 
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  
  const navigate = useNavigate();
  useEffect(() => {
    if(value===0){
      navigate("/")
    }
    else if(value===1){
      navigate("/movies")
    }
    else if(value===2){
      navigate('/series')
    }
    else if(value===3){
      navigate('/search')
    }
  }, [value,navigate])
  
  return (

    <Box  sx={{
      width: '100%',
      position:'fixed',
      bottom:0,
      backgroundColor:"#083aa4a3",
      zIndex:100,
    }}
    backgroundColor='#083aa4a3'
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="Series" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
