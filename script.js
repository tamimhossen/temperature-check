document.getElementById('search-btn').addEventListener('click', function() {
    const locationInput = document.getElementById('location-input').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=2a9ebab6fc9e7081659debb9ac168561`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById('display').style.display = 'block';
        const temp = data.main.temp;
        const tempToCelsius = Math.round(temp - 273.15);
        document.getElementById('temp-unit').innerText = tempToCelsius;
        // console.log(data.name);
        document.getElementById('city-name').innerText = data.name;
        // console.log(data.weather[0].main);
        document.getElementById('lead').innerText = data.weather[0].main;
        document.getElementById('sky-image').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    })
})