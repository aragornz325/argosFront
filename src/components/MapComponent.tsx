import React from 'react';
import {APIProvider, Map,AdvancedMarker, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API|| ''

interface MapComponentProps {
  defaultCenter: { latitude: number; longitude: number };
}

const MapComponent: React.FC<MapComponentProps> = ({ defaultCenter }) => (
  <APIProvider apiKey={apiKey} onLoad={() => console.log('Maps API has loaded.')}>
    <Map
      style={{ width: '50vw', height: '50vh' }}
      defaultCenter={{
        lat: defaultCenter.latitude,
        lng: defaultCenter.longitude
      }}
      defaultZoom={18}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
      mapId={'bdd17c07476f3e5b'}
    />
    <AdvancedMarker position={{
        lat: defaultCenter.latitude,
        lng: defaultCenter.longitude}}
    />
    
  </APIProvider>
);

export default MapComponent;