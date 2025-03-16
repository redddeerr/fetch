document.addEventListener("DOMContentLoaded", () => {
  const apiKey = '0bc01f8b0a4c44ffafa63337251503';

  const searchText = document.getElementById('searchText');
  const buttonSearch = document.getElementById('buttonSearch');
  const tableData = document.getElementById('tableData').querySelector('tbody');

  const fetchData = async (cityName) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru`);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.log('error', error);
    }
  }
  
  buttonSearch.addEventListener('click', async () => {
      const name = searchText.value;
      if (!name) {
        alert('Введите название города');
      } else {
        const data = await fetchData(name);
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.innerText = name;
        tr.appendChild(tdName);
        const tdTemp = document.createElement('td');
        tdTemp.innerText = data.current.temp_c;
        tr.appendChild(tdTemp);
        const tdWeather = document.createElement('td');
        tdWeather.innerText = data.current.condition.text;
        tr.appendChild(tdWeather);
        tableData.appendChild(tr);
      }
  })
  searchText.addEventListener('keyup', async (event) => {
  if (event.key === 'Enter') {
    const name = searchText.value;
    if (!name) {
      alert('Введите название города');
    } else {
      const data = await fetchData(name);
      const tr = document.createElement('tr');
      const tdName = document.createElement('td');
      tdName.innerText = name;
      tr.appendChild(tdName);
      const tdTemp = document.createElement('td');
      tdTemp.innerText = data.current.temp_c;
      tr.appendChild(tdTemp);
      const tdWeather = document.createElement('td');
      tdWeather.innerText = data.current.condition.text;
      tr.appendChild(tdWeather);
      tableData.appendChild(tr);
    }
  }
});
  
});


