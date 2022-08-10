export default class Map{
    idContainer;
    coordOrigin;
    coordDestiny;
    size = 8;
    map;
    constructor(idContainer,coordOrigin,coordDestiny){
        this.idContainer = idContainer;
        this.coordOrigin = coordOrigin;
        this.coordDestiny = coordDestiny;
    }

    generateMap(){
        this.map = L.map(this.idContainer).setView([this.coordOrigin.latitude,this.coordOrigin.longitude],this.size);
        L.tileLayer('https://api.mapbox.com/styles/v1/jonycas998/cl6n1k9e8003a14paiktt20st/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam9ueWNhczk5OCIsImEiOiJja294bTJxN3MwYzlsMm9rOG01Y3pzbDJ3In0.4Vfk2Z5H0zRav21nH4QK2w', {
        }).addTo(this.map);
    }

    createMarker(msg,coord){
        L.marker([coord.latitude,coord.longitude]).addTo(this.map)
        .bindPopup(msg)
        .openPopup();
    }

    createRouting(coordOrigin,coordDestiny){
        L.Routing.control({
            waypoints: [L.latLng(coordOrigin.latitude,coordOrigin.longitude),L.latLng(coordDestiny.latitude,coordDestiny.longitude)],
            routeWhileDragging: true
        }).addTo(this.map);

    }

}