import './App.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import {MapContainer, TileLayer, useMap} from 'react-leaflet';

const start_position = {lat:51.505, lng:-0.09};
let original_map = null;
let latitude = '';
let longitude = '';
let layerGroup = null;

function InitOriginalMap() {
  original_map = useMap();
  return null;
}


function getAllValues(latitudeDigits) {
  let latInputArray = latitudeDigits.split("");
  let latMask = latInputArray.map(val => val === '_' ? true : false);

  let res = [''];
  let i = 0;
  while (res[0].length < 7) {
    if (latMask[i]) {
      let len = res.length;
      for (let j = 0; j < len; j++) {
        for (let k = 1; k < 10; k++) {
          let s = res[j].split("").join("");
          res.push(s + k);
        }
        res[j] += '0';
      }
    } else {
      for (let k = 0; k < res.length; k++) {
        res[k] += latInputArray[i];
      }
    }
    i++;
  }


  return res;
}

function calcLocations() {
  if (layerGroup) {
    layerGroup.clearLayers();
  }

  if (!latitude.match('[0-9._]{7}')) {
    console.log('invalid latitude');
    return;
  }

  if (!longitude.match('[0-9_]{2}\\.[0-9_]{5}')) {
    console.log('invalid longitude');
    return;
  }

  let lat = latitude
  let long = longitude

  let latitudes = getAllValues(lat);
  let longitudes = getAllValues(long);

  
  latitudes = latitudes.filter(s => s.slice(0, 2) < 56 && s.slice(0,2) > 46).map(s => s.slice(0,2) + "." + s.slice(2));
  longitudes = longitudes.filter(s => s.slice(0, 2) < 16 && s.slice(0,2) > 4).map(s => s.slice(0,2) + "." + s.slice(2));

  console.log(latitudes);
  console.log(longitudes);

  let locations = [];
  for (let i = 0; i < latitudes.length; i++) {
    for (let j = 0; j < longitudes.length; j++) {
      let latLng = new L.latLng(latitudes[i], longitudes[j]);
      locations.push(latLng);
    }
  }

  console.log('#location: ' + locations.length);

  var renderer = L.canvas();
  layerGroup = layerGroup ? layerGroup : L.layerGroup([]);
  locations.forEach(loc => {
    layerGroup.addLayer(
    new L.circleMarker(loc, {
    fillColor: '#ff0000',
    color: '#000000',
    attribution: 'border-color: #ff0000',
    renderer: renderer,
    opacity: 0.2,
    weight: 1,
    }).bindPopup('[' + loc.lat + ', ' +loc.lng +']').on('mouseover', function(e){
      console.log('mouseover');
      this.openPopup();
    }))
    layerGroup.addTo(original_map);
  });
}

function handleLatChange(e) {
  latitude = e.target.value;
}

function handleLongChange(e) {
  longitude = e.target.value;
}

function App(){
  return (
    <div className="App">
      <div className="inputs"> 
      Breitegrad: 
      <input onChange={handleLatChange}></input>
      Längengrad:
      <input onChange={handleLongChange}></input>
      <button onClick={calcLocations}>Marker anzeigen</button>
      </div>
      <div className="maps-container">
        <div className="leaflet-container">
          <MapContainer center={start_position} zoom={3} doubleClickZoom={false} worldCopyJump={true}>
            <InitOriginalMap />
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
