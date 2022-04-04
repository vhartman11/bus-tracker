mapboxgl.accessToken = 'pk.eyJ1IjoidmhhcnRtYW4xMSIsImEiOiJjbDFpbjNzcHUwdHpnM2tvNG9qdGliMHdkIn0.l5RV2aupI1U-HtoT4M7How';
  
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
});

/*async function run(){ //gets the bus data  
    const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);
	setTimeout(run, 15000); //will update every 15 seconds

async function getBusLocations(){ //this gets the data
    const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    const response = await fetch(url);
    const json     = await response.json();
    return json.data;*/

/*let marker = new mapboxgl.Marker() //makes a marker
    .setLngLat([-71.093729, 42.359244])
    .addTo(map);
    let counter = 0;
    function move() {
    setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter ++;
      move();
    }, 1000);
}*/