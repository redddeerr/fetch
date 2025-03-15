document.addEventListener("DOMContentLoaded", (event) => {
  const apiKey = '0bc01f8b0a4c44ffafa63337251503' ;

  const fetchData  = async(cityName) => {
    const response = await (`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=&{cityName}&aqi=no&lang=ru`)
    console.log(response);
  }

  fetchData('Moscow');
  fetchData('Sochi');
  fetchData('Perm');
});
