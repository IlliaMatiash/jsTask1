const latitude = document.getElementById("xAxis");
const longitude = document.getElementById("yAxis");

navigator.geolocation.getCurrentPosition(function (position) {
  latitude.innerHTML = "Latitude: " + position.coords.latitude;
  longitude.innerHTML = "Longitude: " + position.coords.latitude;
});
