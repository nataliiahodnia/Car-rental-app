import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import styles from './Map.module.css';
import { FaMapMarkerAlt } from "react-icons/fa";

const customIcon = new Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Map: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

  const position: [number, number] = [49.5937, 34.5407];

  return (
    <div className={styles.mapContainer}>
      <button className={styles.toggleButton} onClick={() => setShowMap(!showMap)}>
      <FaMapMarkerAlt className={styles.icon} />Show map
      </button>
      {showMap && (
        <div className={styles.modalMap}>
          <div className={styles.mapContent}>
            <button className={styles.closeButton} onClick={() => setShowMap(false)}>
              &times;
            </button>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={styles.map}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              <Marker position={position} icon={customIcon}>
                <Popup>
                  <div className={styles.popupContent}>
                    Ми тут! <br /> Це місце розташування нашого офісу.
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
