import React from 'react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API || '';

interface MapComponentProps {
  defaultCenter: { latitude: number; longitude: number };
}

const MapComponent: React.FC<MapComponentProps> = ({ defaultCenter }) => {
  // Verificar los valores
  //console.log('Latitud:', defaultCenter.latitude);
  //console.log('Longitud:', defaultCenter.longitude);
  
  const latitude = Number(defaultCenter.latitude);
  const longitude = Number(defaultCenter.longitude);

  // Validar si los valores son números
  if (isNaN(defaultCenter.latitude) || isNaN(defaultCenter.longitude)) {
    return <div>Error: Latitud o longitud no válidas.</div>;
  }

  return (
    <APIProvider apiKey={apiKey} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        style={{ width: '50vw', height: '50vh' }}
        defaultCenter={{
          lat: latitude,    
          lng: longitude,
        }}
        defaultZoom={18}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId={'bdd17c07476f3e5b'}
      >
        <AdvancedMarker
          position={{
            lat: latitude,
            lng: longitude,
          }}
        />
      </Map>
    </APIProvider>
  );
};

export default MapComponent;

