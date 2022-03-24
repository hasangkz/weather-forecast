const url = 'https://api.openweathermap.org/data/2.5/';
const api_key = '92b36fb50a36013c3d1d0e7b0e2a565c';

const setQuery = (e) => {
  if (e.keyCode == '13') {
    try {
      getResult(search.value);
      search.value = '';
    } catch (err) {
      let city1 = document.querySelector('.city');
      city1.innerText = err;
    }
  }
};

const getResult = (city) => {
  {
    let query = `${url}weather?q=${city}&appid=${api_key}&units=metric`;
    fetch(query)
      .then((weather) => {
        return weather.json();
      })
      .then(display);
  }
};
const display = (result) => {
  let city = document.querySelector('.city');
  city.innerText = `${result.name}, ${result.sys.country}`;

  let temp = document.querySelector('.temp');
  temp.innerText = `${Math.round(result.main.temp)}°C`;

  let desc = document.querySelector('.desc');
  desc.innerText = `${result.weather[0].description}`;

  let minmax = document.querySelector('.minmax');
  minmax.innerText = `${Math.round(result.main.temp_min)}°C  /  ${Math.round(
    result.main.temp_max
  )}°C`;
};

const search = document.querySelector('#search');
search.addEventListener('keypress', setQuery);
