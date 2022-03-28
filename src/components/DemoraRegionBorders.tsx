import { Polygon } from "react-leaflet";
import { astonBorderData } from "../assets/AstonBorderData";
import { borrasBorderData } from "../assets/BorrasBorderData";
import { palatinBorderData } from "../assets/PalatinBorderData";
import { salonaBorderData } from "../assets/SalonaBorderData";
import { sinocardBorderData } from "../assets/SinocardBorderData";
import { subarraBorderData } from "../assets/SubarraBorderData";

export function DemoraRegionBorders() {
  return (
    <>
      <Polygon
        className="region-border"
        positions={palatinBorderData.map((row) => [row[0], row[1]])}
        fillColor={"rgb(122, 11, 11)"}
        stroke={false}
      />
      <Polygon
        className="region-border"
        positions={borrasBorderData.map((row) => [row[0], row[1]])}
        fillColor={"rgb(0, 174, 255)"}
        interactive={true}
        stroke={false}
        eventHandlers={{
          click: () => {},
        }}
      />
      <Polygon
        className="region-border"
        positions={sinocardBorderData.map((row) => [row[0], row[1]])}
        fillColor={"rgb(79, 7, 161)"}
        stroke={false}
      />
      <Polygon
        className="region-border"
        positions={subarraBorderData.map((row) => [row[0], row[1]])}
        fillColor={"rgb(185, 105, 1)"}
        stroke={false}
      />
      <Polygon
        className="region-border"
        positions={astonBorderData.map((row) => [row[0], row[1]])}
        fillColor={"rgb(48, 131, 0)"}
        stroke={false}
      />
      <Polygon
        className="region-border"
        positions={salonaBorderData.map((row) => [row[0], row[1]])}
        fillColor={"darkblue"}
        stroke={false}
      />
    </>
  );
}
