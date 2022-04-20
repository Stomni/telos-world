import { Popup } from "react-leaflet";
import { markerInfos } from "../../data/markerInfos";

import "./cityPopup.css";

export function CityPopup({name}:{name: string}) {
  const cityInfo = markerInfos.find((city) => city.name === name);

  return (
    <Popup>
      <div className="city-infos">
        <h4 className="city-name">{cityInfo?.name}</h4>
        {cityInfo?.population && <li>{"Einwohner: "+ cityInfo?.population}</li>}
        {cityInfo?.ruler && <li>{"Herrscher: "+cityInfo?.ruler}</li> }
        {cityInfo?.orga && <li>{cityInfo?.orga}</li> }
        {cityInfo?.ethnicity && <li>{"Ethnizität: "+cityInfo?.ethnicity}</li>}
      </div>
    </Popup>
  );
}
