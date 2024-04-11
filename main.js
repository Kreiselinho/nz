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


L.control.scale({
    imperial: false
}).addTo(map);

let jsonPunkt = {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [lng, lat]
    },
    "properties": {
        "name": "Abel Tasman National Park"
    }
};

L.geoJSON(jsonPunkt, {}).bindPopup(function (layer) {
    return `
    <b>${layer.feature.properties.name}</b>
    <ul>
        <li>Breite: ${layer.feature.geometry.coordinates[1].toFixed(5)} </li>
        <li>Länge: ${layer.feature.geometry.coordinates[0].toFixed(5)} </li>
    </ul>
`;
}).addTo(map);