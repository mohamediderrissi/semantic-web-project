import React, { useState } from 'react';
import ReactMapGl, { Marker} from 'react-map-gl';
import  './style.css';

const MapComponent = ({latitude, longitude, label }) => {
    const [state, setState] = useState(
        {
            viewport: {
              latitude: latitude===undefined ? 45.4397 : latitude,
              longitude: longitude===undefined ?4.3872 : longitude,
              width: "50vw",
              height: "50vh",
              zoom: 15
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
              <Marker latitude={state.viewport.latitude} longitude={state.viewport.longitude}>
                <button
                class="marker-btn"
                onClick={(e) => {
                  e.preventDefault();
                }}
                >
                  <img src='/position-marker.png' alt='poistion-marker' />
                </button>
              </Marker>            
            </ReactMapGl>
      </div>
    );

}

export default MapComponent;