
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

function ChangeView({ center }) {
    const map = useMap();
    map.setView(center);
    return null;
  }


const Map = ({position}) => {

    return(
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
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