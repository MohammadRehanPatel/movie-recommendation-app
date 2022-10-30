// url = "https://api.themoviedb.org/3/trending/all/day?api_key=6eb02018677790b0d1f0058b45f3d701`"

export const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
  
    return data;
  };