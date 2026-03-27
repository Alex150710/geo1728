import 'babel-polyfill';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { addOffset, addTileLayer, getAddress, validatIp} from './helpers';
import icon from '../images/icon-location.svg';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 40],
});

const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
    center: [52.505, -0.09],
    zoom: 13,
    zoomControl: false,
});
addTileLayer(map);
L.marker([51.505, -0.09], {icon: markerIcon}).addTo(map);
function getData() {
    if (validatIp(ipInput.value)) {
        console.log('1');
        console.log('2');
        getAddress(ipInput.value)
            .then(setInfo)
    }
}

function handleKey(e) {
    if (e.key === 'Enter') {
        getData();
    }
}

function setInfo(mapData) {
    const {lat, lng, country, region, timezone} = mapData.location;

    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = country + ' ' + region;
    timezoneInfo.innerText = timezone;
    ispInfo.innerText = mapData.isp;

    map.setView([lat, lng]);
    L.marker([lat, lng], {icon: markerIcon}).addTo(map);
   console.log(window.innerWidth);
    if (matchMedia("(max-width: 1023px)").matches) {
        addOffset(map);
    }
}
// function setInfo(mapData) {
//     console.log('mapData');
//     console.log(mapData);
//     ipInfo.innerText = mapData.ip;
//     locationInfo.innerText = mapData.location.country + ' '+ mapData.location.region
//     timezoneInfo.innerText = mapData.location.timezone;
//     ispInfo.innerText = mapData.isp;
 
// }

document.addEventListener('DOMContentLoaded', () => {
    getAddress('102.212.22.1').then(setInfo)
});