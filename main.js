let lat = -40.833333;
let lng = 172.9;
let zoom = 13;

let map = L.map('map').setView([lat, lng], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup("<b>Hello New Zealand!</b><br>Welcome to Abel Tasman National Park.").openPopup();
