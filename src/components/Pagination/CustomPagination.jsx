import React from 'react'
import {Pagination ,ThemeProvider} from '@mui/material'

// const darkTheme =createMuiTheme({
//   palette:{
//     type:"dark",
//   }
// })

const CustomPagination = ({setPage,numOfPages=10}) => {
  const handlePageChange= (page)=>{
    setPage(page);
    window.screen(0,0);
  }
  return (
    <>
    <div className="pagination" style={{
      width:'100%',
      display:'flex',
      justifyContent:'center',
      marginTop:10
    }}>
      {/* <ThemeProvider >
      </ThemeProvider> */}
    <Pagination  count={numOfPages} onChange={(e)=>handlePageChange(e.target.textContent)}
    hideNextButton hidePrevButton
    color='secondary'
    />
    </div>
    </>
  )
}

export default CustomPagination