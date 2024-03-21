var map = L.map('map').setView([-40.833333, 172.9], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-40.833333, 172.9]).addTo(map);
marker.bindPopup("<b>Hello New Zealand!</b><br>Welcome to Abel Tasman National Park.").openPopup();