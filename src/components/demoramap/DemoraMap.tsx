import {
  MapContainer,
  ImageOverlay,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";

import "./DemoraMap.css";

import { DemoraMarkers } from "./DemoraMarkers";
import { DemoraRegionBorders } from "./DemoraRegionBorders";

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
      zoomControl={false}
    >
      <ZoomControl position="bottomright" />
      <ImageOverlay
        url="demora-clean-color.png"
        bounds={bounds}
        interactive={true}
        className={"map"}
      >
        <DemoraRegionBorders/>
        <DemoraMarkers/>
      </ImageOverlay>
    </MapContainer>
  );
}

export default DemoraMap;
