let mapPosition = [39.73838709600319, -104.98283484882181]
let mymap = L.map('mapid').setView([39.73838709600319, -104.98283484882181], 12)


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoicmNob2UxMjI5IiwiYSI6ImNrbDhjZnJobzFxMzcydXBlNHowMnhtbmUifQ.OaDYZxu2dce9W5Q9G3rTNw'
}).addTo(mymap);

const geoSuccess = function(position) {
  // hideNudgeBanner()
  // We have the location, don't display banner
  // clearTimeout(nudgeTimeoutId)

  // Do magic with location
  // startPos = position;
  console.log('position', position)
  mapPosition = [position.coords.latitude, position.coords.longitude]
  mymap.setView(mapPosition, 15)
  let marker = L.marker(mapPosition).addTo(mymap);
  // document.getElementById('startLat').innerHTML = startPos.coords.latitude;
  // document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  
}
const geoError = function(error) {
  switch(error.code) {
    case error.TIMEOUT:
      // The user didn't accept the callout
      showNudgeBanner()
      break
  }
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError)