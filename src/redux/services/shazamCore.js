const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ffc4bdef7bmsh008ba9208359439p1d4f45jsn848dea47c83d',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));