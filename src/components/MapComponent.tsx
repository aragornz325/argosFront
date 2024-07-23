import React from 'react';
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

const MapComponent = () => (
 <APIProvider apiKey={'AIzaSyAcRgfC_cXSdalIa_97CONCx9biSuzR5Fo'} onLoad={() => console.log('Maps API has loaded.')}>
   <Map
       defaultZoom={13}
       defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
       mapId='bdd17c07476f3e5b'
       onCameraChanged={ (ev: MapCameraChangedEvent) =>
           console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
       }>
   </Map>
 </APIProvider>
);

export default MapComponent