import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

const flagIcon = new Icon({
  iconUrl: "/flagIcon.png",
  iconSize: [20, 20],
  iconAnchor: [0, 20],
  popupAnchor: [0, -10],
});

export function DemoraMarkers() {
  return (
    <>
      <Marker
        position={[-790, -2480]}
        title={"Palatin"}
        icon={flagIcon}
        eventHandlers={{
          click: () => {},
        }}
      >
        <Popup>
          <div>
            <h2>City of Palatin</h2>
          </div>
        </Popup>
      </Marker>
      <Marker position={[-950, 650]} title={"Stone Garden"} icon={flagIcon} />
    


    </>
  );
}
