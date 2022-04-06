mapboxgl.accessToken = 'pk.eyJ1IjoidmhhcnRtYW4xMSIsImEiOiJjbDFpbjNzcHUwdHpnM2tvNG9qdGliMHdkIn0.l5RV2aupI1U-HtoT4M7How';

markers = []

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 14,
});

async function run(){
    markerRemover();
    const locations = await getBusLocations();
	console.log(locations);
    displayBusses(locations.data);
	setTimeout(run, 15000);
}

async function getBusLocations(){
    const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    const response = await fetch(url);
    const data    = await response.json();
    console.log(data);
    return data
} 

function displayBusses(markerMaker){
    console.log(markerMaker)
    markerMaker.forEach(sum=>{
        markers.push(new mapboxgl.Marker().setLngLat([sum.attributes.longitude, sum.attributes.latitude]).addTo(map))
    })
}

const markerRemover = () => {
    markers.forEach(marker=>{
        marker.remove()
    })
    markers = []
}

run()