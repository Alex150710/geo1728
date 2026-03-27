import L from 'leaflet';

export function addTileLayer(map) {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWxleDE3MjgxNCIsImEiOiJjbWVhdjA4aWswdm83MnFxdXJ2b24xNTV3In0.O26FJ5_c8pbl9ms8dGqNCQ', {
        attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Mikhail Nepomnyashchii</a>.',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
    }).addTo(map);
}
// pk.eyJ1IjoiYWxleDE3MjgxNCIsImEiOiJjbWVhdjA4aWswdm83MnFxdXJ2b24xNTV3In0.O26FJ5_c8pbl9ms8dGqNCQ