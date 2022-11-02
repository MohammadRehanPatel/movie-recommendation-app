import React from 'react'
import {Pagination ,ThemeProvider,createTheme} from '@mui/material'

const darkTheme =createTheme({
  palette:{
    type:"dark",
  }
})

const CustomPagination = ({setPage,numOfPages=10}) => {
  const handlePageChange= (page)=>{
    setPage(page);
    window.scrollTo(0,0);
  }
  return (
    <>
    <div className="pagination" style={{
      width:'100%',
      display:'flex',
      justifyContent:'center',
      marginTop:10
    }}>
      <ThemeProvider theme={darkTheme} >
    <Pagination  count={numOfPages} onChange={(e)=>handlePageChange(e.target.textContent)}
    hideNextButton hidePrevButton
    color='secondary'
    />
    </ThemeProvider>
    </div>
    </>
  )
}

export default CustomPagination