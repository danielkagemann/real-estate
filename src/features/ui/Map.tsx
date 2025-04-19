'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

type Props = {
   location: string
}

export default function Map({ location }: Props) {
   const cities: Record<string, [number, number]> = {
      "Alicante": [38.3452, -0.4810],
      "Benidorm": [38.5340, -0.1310],
      "Torrevieja": [37.9787, -0.6822],
      "Denia": [38.8408, 0.1057],
      "Jávea": [38.7926, 0.1650],
      "Calpe": [38.6444, 0.0448],
      "Altea": [38.6022, -0.0510],
      "Villajoyosa": [38.5075, -0.2332],
      "Santa Pola": [38.1910, -0.5560],
      "Elche": [38.2699, -0.7126],
      "Moraira": [38.6883, 0.1356],
      "Guardamar del Segura": [38.0902, -0.6545],
      "Albir": [38.5675, -0.0706],
      "Benissa": [38.7145, 0.0525],
      "Teulada": [38.7273, 0.1077],
      "Orihuela Costa": [37.9304, -0.7287],
      "La Nucia": [38.6014, -0.1206],
      "Pego": [38.8439, -0.1224],
      "Rojales": [38.0852, -0.7245],
      "San Fulgencio": [38.1165, -0.6715],
   };

   const coords = cities[location] || [0, 0]

   return (
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
         <MapContainer
            center={coords}
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-full"
         >
            <TileLayer
               attribution='&copy; <a href="https://carto.com/">CARTO</a>'
               url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            <Marker position={coords} />
         </MapContainer>
      </div>
   );
}
