let lat = -40.833333;
let lng = 172.9;
let zoom = 13;

let map = L.map('map', {
    center: [lat, lng],
    zoom: zoom
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`
        <b>Welcome to Abel Tasman National Park!</b>
        <ul>
            <li>Breite: ${lat.toFixed(5)} </li>
            <li>Länge: ${lng.toFixed(5)} </li>
        </ul>
    `).openPopup();

    L.control.scale({
        imperial:false
    }).addTo(map);