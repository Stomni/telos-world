import alephiaflag from "../assets/alephiaflag.png";
import palatinflag from "../assets/palatinflag.png";
import salonaflag from "../assets/salonaflag.png";
import borrasflag from "../assets/borrasflag.png";
import astonflag from "../assets/astonflag.png";
import sinocardflag from "../assets/sinocardflag.png";

export type Territory = {
  name: string;
  population: string;
  government: string;
  ruler: string;
  flag?: string;
  desc: string;
  language: string;
  religion: string[];
};

export const territoryInfos: Territory[] = [
  {
    name: "Imperium Palatin",
    population: "10 Millionen",
    government: "Monarchie",
    ruler: "Kain Astalos",
    flag: palatinflag,
    desc: "Vor ca. 600 Jahren begann der Eroberungsfeldzug der Stadt Palatin auf dem Kontinent Demora. Dank ihrer ausgeprägten Militärmacht konnte ihnen im Westen Demoras niemand die Stirn bieten und viele Städte und Siedlungen schlossen sich friedlich dem Imperium an. Nur das Feuerreich schafft es dem Imperium einhalt zu gebieten und so endte die Kriegszeit auf Demora vor ca. 30 Jahren.",
    language: "Common",
    religion: ["Keine"],
  },
  {
    name: "Subarra",
    population: "1 Millionen",
    government: "Monarchie",
    ruler: "Amon-Ra",
    desc: "Die Subarra ist das Hoheitsgebiet des Amon-Ra, dem Herrscher von Alephia. ",
    flag: alephiaflag,
    language: "Sarraka",
    religion: ["Sonnengott Ra"],
  },
  {
    name: "Feuerreich",
    population: "8 Millionen",
    government: "Theokratie",
    ruler: "Kreis des Feuers",
    language: "Common",
    religion: ["Salona"],
    flag: salonaflag,
    desc: "Das Feuerreich ist eine Ansammlung kleiner Staaten, welche nur im Kriegsfall geeint vom Kreis des Feuers geleitet werden. Jedoch nur solange die Weisheiten und Regeln der Salona durchgsetzt werden.",
  },
  {
    name: "Borras Föderation",
    population: "350 Tausend",
    government: "Förderation",
    ruler: "Keiner",
    language: "Common",
    religion: ["Keine"],
    flag: borrasflag,
    desc: "Ein Zusammenschluss zwischen, Brivas, Genava und Lunsar um gemeinsam den Norden Demoras zu regieren. Jedoch gibt es oft Streitigkeiten zwischen Brivas und Genava. ",
  },
  {
    name: "Sinocard",
    population: "450 Tausend",
    government: "Autokratie",
    ruler: "Xafirex",
    language: "Drakonisch",
    religion: ["Keine"],
    flag: sinocardflag,
    desc: "Nach dem Kataklysmus haben sich die Dragonborn von Demora in die felsige Küstenregion zurück gezogen und für eine lange Zeit kein Kontakt zum Rest des Kontinents gehabt. Erst als das Imperium versuchte die Avium Einöde zu durchqueren wurde Sinocard wieder aktiv.",
  },
  {
    name: "Aston",
    population: "Unbekannt",
    government: "Oligarchie",
    ruler: "Zirkel des Waldes",
    language: "Elvisch",
    religion: ["Mondgöttin"],
    flag: astonflag,
    desc: "Kurz nach dem Auftauchen der Götter haben sich die Waldelfen in diesem Gebiet niedergelassen. Hier leben sie im einklang mit der Natur in pflegen eine tiefe Verbindung zu der Feywild. ",
  },
];
