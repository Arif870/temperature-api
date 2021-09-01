// let url = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=acac33ca91d49cbf8c8d031844e9db28`;
const btnClick = () => {
  const inputSearch = document.getElementById("input-box");
  const inputSearchText = inputSearch.value;
  inputSearch.value = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputSearchText}&appid=acac33ca91d49cbf8c8d031844e9db28`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data));
};
const displayTemp = temp => {
  console.log(temp);
  const section = document.getElementById("display");
  section.textContent = "";
  const div = document.createElement("div");
  let cel = (`${temp.main.temp}` - 273).toFixed(2);

  div.innerHTML = `
  <img class="text-light" src="http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png">

        <h1>${temp.name}</h1>
        <h3><span>${cel}</span>&deg;C</h3>
        <h1 class="lead">${temp.weather[0].main}</h1> `;

  section.appendChild(div);
};
