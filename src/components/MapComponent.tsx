import React from 'react';
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

const MapComponent = () => (
 <APIProvider apiKey={'AIzaSyAcRgfC_cXSdalIa_97CONCx9biSuzR5Fo'} onLoad={() => console.log('Maps API has loaded.')}>
  <h1>este es el mapa</h1>
  <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
      defaultZoom={3}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
 </APIProvider>
);

export default MapComponent