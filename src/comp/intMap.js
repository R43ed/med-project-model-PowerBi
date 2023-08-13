import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React,{useRef,useEffect} from "react"; 

const IntMap = ({ onMarkerClick }) => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null); // store map instance in a ref



    useEffect(() => {
        if (mapRef.current && !mapInstance.current) {
            mapInstance.current = L.map(mapRef.current, { scrollWheelZoom: false ,}).setView([24.4686, 39.6142], 13); // Coordinates for Madinah

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapInstance.current);

            // Define marker icon
            var icon = L.icon({//https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png
                iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                iconSize: [25, 41], // size of the icon
                shadowSize: [41, 41], // size of the shadow
                iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
                shadowAnchor: [14, 41],  // the same for the shadow
                popupAnchor: [0, -41] // point from which the popup should open relative to the iconAnchor
            });

            L.marker([24.4686, 39.6142], {icon: icon}).addTo(mapInstance.current)
                .on('click', onMarkerClick)
                .bindPopup('Madinah, Saudi Arabia')
                .openPopup();
        }
    });

    
    

    return <div ref={mapRef} style={{ height: "500px", width: "100%" }} />;
};
export default IntMap;