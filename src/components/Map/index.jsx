
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from '../../assets/images/icon-location.svg'

    function ChangeView({ center }) {
        const map = useMap();
        map.setView(center);
        return null;
    }

    let DefaultIcon = L.icon({
    iconUrl: icon,
    });

    L.Marker.prototype.options.icon = DefaultIcon;


const Map = ({position}) => {

    return(
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{ height: "100vh" }}>
        <ChangeView center={position} />
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
            <Popup position={position}>
            {`${position}`}
            </Popup>
        </Marker>
    </MapContainer>
    )
}

export default Map