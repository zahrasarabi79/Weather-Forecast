const gettData = document.querySelector(".getdata");
const texttemp = document.getElementById("texttemp");
// variable of map
let map = L.map("map").setView([35.77108184855974, 51.411715020486454], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);
// click on map and show cord on input
map.addEventListener("click", function (ev) {
  let latlng = map.mouseEventToLatLng(ev.originalEvent);
  const latlnglat = (Longitude.value = latlng.lat);
  const latlnglng = (latitude.value = latlng.lng);
  getData(latlnglat, latlnglng);
});

// give input value and get temp
gettData.addEventListener("click", () => {
  const myLongitude = parseFloat(document.getElementById("Longitude").value);
  const mylatitude = parseFloat(document.getElementById("latitude").value);
  getData(mylatitude, myLongitude);
});

// function of get temp
function getData(mylatitude, myLongitude) {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=" +
      mylatitude +
      "&longitude=" +
      myLongitude +
      "&current_weather=true"
  )
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      const temp = data.current_weather.temperature;
      texttemp.innerHTML = `temperature:${temp}`;
    });
}
