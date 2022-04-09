import { useState } from "react";
import { Polygon } from "react-leaflet";
import { astonBorderData } from "../../assets/AstonBorderData";
import { borrasBorderData } from "../../assets/BorrasBorderData";
import { palatinBorderData } from "../../assets/PalatinBorderData";
import { salonaBorderData } from "../../assets/SalonaBorderData";
import { sinocardBorderData } from "../../assets/SinocardBorderData";
import { subarraBorderData } from "../../assets/SubarraBorderData";
import { territoryInfos } from "../../assets/territoryInfos";
import { Modal } from "../modal/Modal";


export function DemoraRegionBorders() {
  const [showModal, setShowModal] = useState(false);
  const [borderListIndex, setBorderListIndex] = useState(0);
  return (
    <>
      <Modal
        isOpen={showModal}
        title={territoryInfos[borderListIndex].name}
        onClose={() => setShowModal(false)}
        children={
          <div className="modal-territory-content">
            <div className="info-box">
              <img src={territoryInfos[borderListIndex].flag} alt="Territory flag"/>
              <h6>
                {"Einwohner: ca. " + territoryInfos[borderListIndex].population}
              </h6>
              <h6>
                {"Regierung: " + territoryInfos[borderListIndex].government}
              </h6>
              <h6>{"Herrscher: " + territoryInfos[borderListIndex].ruler}</h6>
              <h6>{"Sprachen: " + territoryInfos[borderListIndex].language}</h6>
              <h6>{"Religion: " + territoryInfos[borderListIndex].religion}</h6>
            </div>
            <div className="description-box">
              <p>{territoryInfos[borderListIndex].desc}</p>
            </div>
          </div>
        }
      />
      <Polygon
        className={"region-border " + (showModal ? "modal-active" : "")}
        positions={palatinBorderData.map((row) => [row[0], row[1]])}
        fillColor={"rgb(122, 11, 11)"}
        stroke={false}
        eventHandlers={{
          click: () => {
            setBorderListIndex(
              territoryInfos.findIndex(
                (element) => element.name === "Imperium Palatin"
              )
            );
            setShowModal(true);
          },
        }}
      />
      <Polygon
        className="region-border"
        positions={borrasBorderData.map((row) => [row[0], row[1]])}
        fillColor={"rgb(0, 174, 255)"}
        interactive={true}
        stroke={false}
        eventHandlers={{
          click: () => {
            setBorderListIndex(
              territoryInfos.findIndex(
                (element) => element.name === "Borras Föderation"
              )
            );
            setShowModal(true);
          },
        }}
      />
      <Polygon
        className="region-border"
        positions={sinocardBorderData.map((row) => [row[0], row[1]])}
        fillColor={"rgb(79, 7, 161)"}
        stroke={false}
        eventHandlers={{
          click: () => {
            setBorderListIndex(
              territoryInfos.findIndex(
                (element) => element.name === "Sinocard"
              )
            );
            setShowModal(true);
          },
        }}
      />
      <Polygon
        className="region-border"
        positions={subarraBorderData.map((row) => [row[0], row[1]])}
        fillColor={"rgb(185, 105, 1)"}
        stroke={false}
        eventHandlers={{
          click: () => {
            setBorderListIndex(
              territoryInfos.findIndex((element) => element.name === "Alephia")
            );
            setShowModal(true);
          },
        }}
      />
      <Polygon
        className="region-border"
        positions={astonBorderData.map((row) => [row[0], row[1]])}
        fillColor={"rgb(48, 131, 0)"}
        stroke={false}
        eventHandlers={{
          click: () => {
            setBorderListIndex(
              territoryInfos.findIndex(
                (element) => element.name === "Aston"
              )
            );
            setShowModal(true);
          },
        }}
      />
      <Polygon
        className="region-border"
        positions={salonaBorderData.map((row) => [row[0], row[1]])}
        fillColor={"darkblue"}
        stroke={false}
        eventHandlers={{
          click: () => {
            setBorderListIndex(
              territoryInfos.findIndex(
                (element) => element.name === "Feuerreich"
              )
            );
            setShowModal(true);
          },
        }}
      />
    </>
  );
}
