import { Icon, } from "leaflet";
import { Marker, } from "react-leaflet";
import { CityPopup } from "./cityPopup";

const flagIcon = new Icon({
  iconUrl: "/flagIcon.png",
  iconSize: [20, 20],
  iconAnchor: [0, 20],
  popupAnchor: [0, -10],
});

const mapMarker = new Icon({
  iconUrl: "/mapMarker.png",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -10],
});

const smallMapMarker = new Icon({
  iconUrl: "/smallMapMarker.png",
  iconSize: [15, 15],
  iconAnchor: [5, 5],
  popupAnchor: [0, -10],
});

const mediumMapMarker = new Icon({
  iconUrl: "/mediumMapMarker.png",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -10],
});

const anchorIcon = new Icon({
  iconUrl: "/anchorIcon.png",
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, 0],
});

export function DemoraMarkers() {
  return (
    <>
      <Marker
        position={[-790, -2480]}
        title={"Palatin"}
        icon={mapMarker}
        eventHandlers={{
          click: () => {},
        }}
      >
        <CityPopup name="Palatin" />
      </Marker>
      <Marker position={[-950, 650]} title={"Stone Garden"} icon={flagIcon}>
        <CityPopup name="Stone Garden" />
      </Marker>
      <Marker position={[-2600, -940]} title={"Aramore"} icon={mapMarker}>
        <CityPopup name="Aramore" />
      </Marker>
      <Marker
        position={[-1500, -750]}
        title={"Vectis"}
        icon={smallMapMarker}
      >
        <CityPopup name="Vectis"/>
      </Marker>
      <Marker
        position={[-1160, -1200]}
        title={"Esquillin"}
        icon={mapMarker}
      >
        <CityPopup name="Esquillin"/>
      </Marker>
      <Marker
        position={[-480, 470]}
        title={"Erastin"}
        icon={mediumMapMarker}
      >
        <CityPopup name="Erastin"/>
      </Marker>
      <Marker
        position={[-650, 0]}
        title={"Salva"}
        icon={smallMapMarker}
      >
        <CityPopup name="Salva"/>
      </Marker>
      <Marker
        position={[-280, -800]}
        title={"Capsan"}
        icon={smallMapMarker}
      >
        <CityPopup name="Capsan"/>
      </Marker>
      <Marker
        position={[-230, -1550]}
        title={"Aventin"}
        icon={mapMarker}
      >
        <CityPopup name="Aventin"/>
      </Marker>
      <Marker
        position={[-500, -1800]}
        title={"Vetera"}
        icon={smallMapMarker}
      >
        <CityPopup name="Vetera"/>
      </Marker>
      <Marker
        position={[-100, -3250]}
        title={"Vradan"}
        icon={mediumMapMarker}
      >
        <CityPopup name="Vradan"/>
      </Marker>
      <Marker
        position={[-200, -3950]}
        title={"Nidum"}
        icon={smallMapMarker}
      >
        <CityPopup name="Nidum"/>
      </Marker>
      <Marker
        position={[-130, -5150]}
        title={"Portus Fractus"}
        icon={anchorIcon}
      >
        <CityPopup name="Portus Fractus"/>
      </Marker>
      <Marker
        position={[1150, -950]}
        title={"Warcrest"}
        icon={mediumMapMarker}
      >
        <CityPopup name="Warcrest"/>
      </Marker>
      <Marker
        position={[820, -1330]}
        title={"Triden"}
        icon={smallMapMarker}
      >
        <CityPopup name="Triden"/>
      </Marker>
      <Marker
        position={[1550, -750]}
        title={"Divio"}
        icon={smallMapMarker}
      >
        <CityPopup name="Divio"/>
      </Marker>
      <Marker
        position={[2330, -1370]}
        title={"Zelah"}
        icon={smallMapMarker}
      >
        <CityPopup name="Zelah"/>
      </Marker>
      <Marker position={[600, 270]} title={"Tregaron"} icon={flagIcon}>
        <CityPopup name="Tregaron"/>
      </Marker>
      <Marker
        position={[-4300, 350]}
        title={"Sinocard"}
        icon={mediumMapMarker}
      >
        <CityPopup name="Sinocard"/>
      </Marker>
      <Marker
        position={[-1280, 1950]}
        title={"Alephia"}
        icon={mapMarker}
      >
        <CityPopup name="Alephia"/>
      </Marker>
      <Marker
        position={[-500, 4100]}
        title={"Aston"}
        icon={mediumMapMarker}
      >
        <CityPopup name="Aston"/>
      </Marker>
      <Marker
        position={[-320, 3250]}
        title={"Padus"}
        icon={smallMapMarker}
      >
        <CityPopup name="Padus"/>
      </Marker>
      <Marker
        position={[340, 2770]}
        title={"Torrine"}
        icon={mediumMapMarker}
      >
        <CityPopup name="Torrine"/>
      </Marker>
      <Marker
        position={[700, 2150]}
        title={"Aurasio"}
        icon={smallMapMarker}
      >
        <CityPopup name="Aurasio"/>
      </Marker>
      <Marker
        position={[1650, 1900]}
        title={"Salona"}
        icon={mapMarker}
      >
        <CityPopup name="Salona"/>
      </Marker>
      <Marker
        position={[1500, 1400]}
        title={"Avennio"}
        icon={smallMapMarker}
      >
        <CityPopup name="Avennio"/>
      </Marker>
      <Marker
        position={[1500, 2300]}
        title={"Aesis"}
        icon={smallMapMarker}
      >
        <CityPopup name="Aesis"/>
      </Marker>
      <Marker
        position={[1500, 3300]}
        title={"Raikan"}
        icon={smallMapMarker}
      >
        <CityPopup name="Raikan"/>
      </Marker>
      <Marker
        position={[600, 3750]}
        title={"Solime"}
        icon={mediumMapMarker}
      >
        <CityPopup name="Solime"/>
      </Marker>
      <Marker
        position={[1000, 3600]}
        title={"Veii"}
        icon={smallMapMarker}
      >
        <CityPopup name="Veii"/>
      </Marker>
      <Marker
        position={[1350, 3900]}
        title={"Portus Fortuna"}
        icon={anchorIcon}
      >
        <CityPopup name="Portus Fortuna"/>
      </Marker>
      <Marker
        position={[2550, 2550]}
        title={"Portus Zhaita"}
        icon={anchorIcon}
      >
        <CityPopup name="Portus Zhaita"/>
      </Marker>
      <Marker
        position={[1800, 520]}
        title={"Tarentum"}
        icon={smallMapMarker}
      >
        <CityPopup name="Tarentum"/>
      </Marker>
      <Marker
        position={[2230, 200]}
        title={"Portus Almus"}
        icon={anchorIcon}
      >
        <CityPopup name="Portus Almus"/>
      </Marker>
      <Marker
        position={[2260, -130]}
        title={"Khrain"}
        icon={smallMapMarker}
      >
        <CityPopup name="Khrain"/>
      </Marker>
      <Marker
        position={[2800, -130]}
        title={"Brivas"}
        icon={mediumMapMarker}
      >
       <CityPopup name="Brivas"/> 
      </Marker>
      <Marker
        position={[3300, -1300]}
        title={"Genava"}
        icon={mediumMapMarker}
      >
        <CityPopup name="Genava"/>
      </Marker>
      <Marker
        position={[3600, -2600]}
        title={"Portus Regnum"}
        icon={anchorIcon}
      >
        <CityPopup name="Portus Regnum"/>
      </Marker>
      <Marker
        position={[4000, -800]}
        title={"Lunsar"}
        icon={mediumMapMarker}
      >
        <CityPopup name="Lunsar"/>
      </Marker>
      <Marker
        position={[-2320, -1730]}
        title={"Portus Sicia"}
        icon={anchorIcon}
      >
        <CityPopup name="Portus Sicia"/>
      </Marker>
    </>
  );
}
