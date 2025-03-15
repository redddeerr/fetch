document.addEventListener("DOMContentLoaded", () => {
  const apiKey = '0bc01f8b0a4c44ffafa63337251503' ;

  const fetchData = async (cityName) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru`);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.log('error', error);
    }
  }
  fetchData('Moscow');
  fetchData('Sochi');
  fetchData('Perm');
});


