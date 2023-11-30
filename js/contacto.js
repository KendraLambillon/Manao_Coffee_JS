/*Map creation*/
/*Map, set its view to our chosen geographical coordinates and a zoom level */
var map = L.map('map').setView([41.11699, 1.25524], 14);

/*Add a tile layer to add to our map*/
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/*Add a marker*/
var marker = L.marker([41.11702459404782, 1.2551477551460266]).addTo(map);

/*Pop up on marker*/
var popup = L.popup()
    .setLatLng([41.11699, 1.25524])
    .setContent("Manao Coffee <br> 12 plaza de la fuente, 43890, Tarragona")
    .openOn(map);