// import { useNavigate, useSearchParams } from "react-router-dom";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMap,
//   useMapEvents,
// } from "react-leaflet";

// import styles from "./Map.module.css";
// import { useEffect, useState } from "react";
// // import { useCities } from "../contexts/CitiesContext";
// import useCities from "../context/CititesContext";
// import { useGeolocation } from "../hooks/useGeolocation";
// // import { useUrlPosition } from "../hooks/useUrlPosition";
// import Button from "./Button";

// function Map() {
//   const { cities } = useCities();
//   const [mapPosition, setMapPosition] = useState([40, 0]);
//   const {
//     isLoading: isLoadingPosition,
//     position: geolocationPosition,
//     getPosition,
//   } = useGeolocation();
//   const [mapLat, mapLng] = useUrlPosition();

//   useEffect(
//     function () {
//       if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
//     },
//     [mapLat, mapLng]
//   );

//   useEffect(
//     function () {
//       if (geolocationPosition)
//         setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
//     },
//     [geolocationPosition]
//   );

//   return (
//     <div className={styles.mapContainer}>
//       {!geolocationPosition && (
//         <Button type="position" onClick={getPosition}>
//           {isLoadingPosition ? "Loading..." : "Use your position"}
//         </Button>
//       )}

//       <MapContainer
//         center={mapPosition}
//         zoom={6}
//         scrollWheelZoom={true}
//         className={styles.map}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
//         />
//         {cities.map((city) => (
//           <Marker
//             position={[city.position.lat, city.position.lng]}
//             key={city.id}
//           >
//             <Popup>
//               <span>{city.emoji}</span> <span>{city.cityName}</span>
//             </Popup>
//           </Marker>
//         ))}

//         <ChangeCenter position={mapPosition} />
//         <DetectClick />
//       </MapContainer>
//     </div>
//   );
// }

// function ChangeCenter({ position }) {
//   const map = useMap();
//   map.setView(position);
//   return null;
// }

// function DetectClick() {
//   const navigate = useNavigate();

//   useMapEvents({
//     click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
//   });
// }

// export default Map;
// import { useNavigate, useSearchParams } from "react-router-dom";
// import styles from "./Map.module.css";
// import {
//   MapContainer,
//   Marker,
//   TileLayer,
//   Popup,
//   useMap,
//   useMapEvent,
// } from "react-leaflet";
// import { useCities } from "../context/CitiesContext"; // Ensure this path is correct
// import { useEffect, useState } from "react";
// import useGeolocation from "../hooks/useGeolocation";
// import Button from "./Button";

// function Map() {
//   const [searchParams] = useSearchParams();
//   const [mapPosition, setMapPosition] = useState([40, 0]);
//   const { cities } = useCities();
//   const {
//     isLoading: isLoadingPosition,
//     position: geolocationPosition,
//     getPosition,
//   } = useGeolocation();
//   const mapLat = searchParams.get("lat");
//   const mapLng = searchParams.get("lng");

//   useEffect(() => {
//     if (mapLat && mapLng)
//       setMapPosition([parseFloat(mapLat), parseFloat(mapLng)]);
//   }, [mapLat, mapLng]);

//   useEffect(() => {
//     if (geolocationPosition) {
//       setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
//     }
//   }, [geolocationPosition]);

//   return (
//     <div className={styles.mapContainer}>
//       <Button type="position" onClick={getPosition}>
//         {isLoadingPosition ? "loading..." : "use your position"}
//       </Button>
//       <MapContainer
//         center={mapPosition}
//         zoom={13}
//         scrollWheelZoom={true}
//         className={styles.mapContainer}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {cities.map((city) => (
//           <Marker
//             position={[city.position.lat, city.position.lng]}
//             key={city.id}
//           >
//             <Popup>
//               <span>{city.emoji}</span> <span>{city.cityName}</span>
//             </Popup>
//           </Marker>
//         ))}
//         <ChangePosition position={mapPosition} />
//         <DetectClick />
//       </MapContainer>
//     </div>
//   );
// }

// function ChangePosition({ position }) {
//   const map = useMap();
//   useEffect(() => {
//     map.setView(position);
//   }, [position, map]);
//   return null;
// }

// function DetectClick() {
//   const navigate = useNavigate();
//   useMapEvent({
//     click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
//   });
//   return null;
// }

// export default Map;
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useCities } from "../context/CititesContext"; // Ensure this path is correct
import { useEffect, useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";

function Map() {
  const [searchParams] = useSearchParams();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const { cities } = useCities();
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(() => {
    if (mapLat && mapLng)
      setMapPosition([parseFloat(mapLat), parseFloat(mapLng)]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition) {
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    }
  }, [geolocationPosition]);

  return (
    <div className={styles.mapContainer}>
      <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? "loading..." : "use your position"}
      </Button>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.mapContainer}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangePosition position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangePosition({ position }) {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }, [position, map]);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
  return null;
}

export default Map;
