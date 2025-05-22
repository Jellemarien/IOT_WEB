
var map = L.map('map').setView([51.35, 4.64], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.35, 4.64]).addTo(map);
marker.bindPopup("bedrijfsvestiging.").openPopup();

var circle = L.circle([51.35, 4.64], {
    color: '#0066ff',
    fillColor: '#30a3ff',
    fillOpacity: 0.5,
    radius: 10000
}).addTo(map);

circle.bindPopup("werkgebied.");