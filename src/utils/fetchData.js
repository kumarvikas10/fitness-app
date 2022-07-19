export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key":"ebdc021970mshecfc0031e154e8ap133dc4jsn927b6706a9a5",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ebdc021970mshecfc0031e154e8ap133dc4jsn927b6706a9a5',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};