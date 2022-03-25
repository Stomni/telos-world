import {
  MapContainer,
  Marker,
  Popup,
  Polygon,
  ImageOverlay,
  useMap,
} from "react-leaflet";
import L from "leaflet";

import "./DemoraMap.css";
import { useEffect, useRef, useState } from "react";
import { palatinBorderData } from "../assets/PalatinBorderData";
import { borrasBorderData } from "../assets/BorrasBorderData";

const bounds: [[number, number], [number, number]] = [
  [-4960, -7016],
  [4960, 7016],
];

function DemoraMap(props: any) {

  return (
    <MapContainer
      crs={L.CRS.Simple}
      minZoom={-3}
      maxZoom={3}
      zoom={0}
      bounds={bounds}
      id="map-container"
    >
      <ImageOverlay
        url="demora-clean.png"
        bounds={bounds}
        interactive={true}
        className={"map"}
      >
        <Polygon
          className="region-border"
          positions={palatinBorderData.map((row) => [row[0], row[1]])}
          color={"rgb(122, 11, 11)"}
        />
        <Polygon
          className="region-border"
          positions={borrasBorderData.map((row) => [row[0], row[1]])}
          color={"rgb(0, 174, 255)"}
          interactive={true}
          eventHandlers={{
            click: () => {},
          }}
        />
        <Marker
          position={[-790, -2480]}
          title={"Palatin"}
          eventHandlers={{
            click: () => {
              
            },
          }}
        >
          <Popup>
            <div>
              <h2>City of Palatin</h2>
            </div>
          </Popup>
        </Marker>
        
      </ImageOverlay>
    </MapContainer>
  );
}

export default DemoraMap;
