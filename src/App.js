import './App.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import {MapContainer, TileLayer, useMap} from 'react-leaflet';

const start_position = {lat:51.505, lng:-0.09};
let original_map = null;
let latitude = '50._7_30';
let longitude = '__.1_203';
let layerGroup = null;

function InitOriginalMap() {
  original_map = useMap();
  layerGroup = L.layerGroup([]);
  document.getElementById('lat').setAttribute('value', latitude);
  document.getElementById('long').setAttribute('value', longitude);
  return null;
}



function calcLocations() {
  if (layerGroup) {
    layerGroup.clearLayers();
  }

  if (!latitude.match('^[0-9_]+\\.[0-9_]+$')) {
    console.log('invalid latitude');
    document.getElementById('errortext').hidden = false;
    return;
  }

  if (!longitude.match('^[0-9_]+\\.[0-9_]+$')) {
    console.log('invalid longitude');
    document.getElementById('errortext').hidden = false;
    return;
  }
  document.getElementById('errortext').hidden = true;

  let decimalLatIndex = latitude.indexOf('.');
  let decimalLongIndex = latitude.indexOf('.');

  let lat = latitude.replace('.', '');
  let long = longitude.replace('.', '');

  let latitudes = getAllValues(lat);
  let longitudes = getAllValues(long);

  
  latitudes = latitudes.filter(s => s.slice(0, 2) < 56 && s.slice(0,2) > 46).map(s => s.slice(0,decimalLatIndex) + "." + s.slice(decimalLatIndex));
  longitudes = longitudes.filter(s => s.slice(0, 2) < 16 && s.slice(0,2) > 4).map(s => s.slice(0,decimalLongIndex) + "." + s.slice(decimalLongIndex));

  
  let locations = [];
  for (let i = 0; i < latitudes.length; i++) {
    for (let j = 0; j < longitudes.length; j++) {
      let latLng = new L.latLng(latitudes[i], longitudes[j]);
      locations.push(latLng);
    }
  }

  console.log('# of locations: ' + locations.length);
  if (locations.length > 1e6) {
    return;
  }

  var renderer = L.canvas();
  locations.forEach(loc => {
    layerGroup.addLayer(
    new L.circleMarker(loc, {
      fillColor: '#ff0000',
      color: '#000000',
      renderer: renderer,
      weight: 1,
    })
    .bindPopup('[' + loc.lat + ', ' +loc.lng +']')
    .on('mouseover', function(e){
      this.openPopup();
    }));
    layerGroup.addTo(original_map);
  });
}


function getAllValues(coordInput) {
  let inputArray = coordInput.split("");
  let mask = inputArray.map(val => val === '_' ? true : false);

  let res = [''];
  let i = 0;
  while (res[0].length < coordInput.length) {
    if (mask[i]) {
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
        res[k] += inputArray[i];
      }
    }
    i++;
  }

  return res;
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
        <span>Breitengrad:</span>
        <input className= 'input' id='lat' onChange={handleLatChange}></input>
        <span>Längengrad:</span>
        <input id= 'long' onChange={handleLongChange}></input>
        <button onClick={calcLocations}>Marker anzeigen</button>
        <span id='errortext' style={{color: '#ff0000'}} hidden={true}> Fehlerhafte Eingabe. </span>
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