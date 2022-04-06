mapboxgl.accessToken = 'pk.eyJ1IjoidmhhcnRtYW4xMSIsImEiOiJjbDFpbjNzcHUwdHpnM2tvNG9qdGliMHdkIn0.l5RV2aupI1U-HtoT4M7How';
  
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
});

async function run(){
    const locations = await getBusLocations();
	console.log(locations);
	setTimeout(run, 15000);
}    

async function getBusLocations(){
    const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    const response = await fetch(url);
    const data    = await response.json();
    console.log(data);
}    

let marker = new mapboxgl.Marker()
    /*.setLngLat // this will need to be set to the lng and lat of the busses in the array
    .addTo(map)*/

for (i=0; i<data.length; i++) {
    marker[i].setLngLat([data[i].attributes.longitude, data[i].attributes.latitude]);
        { icon: L.mapbox.marker.icon({
            'marker-symbol': 'post',
            'marker-color': '0044ff'}),
            title: title
        }
    )
    marker.bindPopup(title);
    markers.addlayer(marker);
}

map.addLayer(markers);
run()




/*const markers = new L.MarkerClusterGroup();
const data = chicago.data;
const length = data.lenght;*/

/*for (let i=0; i<length; i++) {
  const a = chicago.data [i];
  const title = a[13];
  const marker = L.marker(
    new L.LatLng(a[26], a[28]),
    { icon: L.mapbox.marker.icon({
      'marker-symbol': 'post',
      'marker-color': '0044ff'}),
      title: title
    });
  marker.bindPopup(title);
  markers.addLayer(marker);  
}

map.addLayer(markers);*/

