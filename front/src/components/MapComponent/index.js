import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';
const MapComponent = () => {
    const [state, setState] = useState(
        {
            viewport: {
              latitude: 45.4211,
              longitude: -75.6903,
              width: "100vw",
              height: "100vh",
              zoom: 10
            }
          }
    );
    return (
        <div>
            <ReactMapGl { ...state.viewport}
            mapStyle="mapbox://styles/jeuxconflit/cki0u2ojv2n5o1aluozw00egq" 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={(viewport) => setState({viewport: viewport })}
            style={{ width: "100px", height:"100px"}}
            >
            
            </ReactMapGl>
      </div>
    );

}

export default MapComponent;