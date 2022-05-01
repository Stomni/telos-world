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
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    language: "Common",
    religion: ["Keine"],
  },
  {
    name: "Alephia",
    population: "1 Millionen",
    government: "Monarchie",
    ruler: "Amon Ra",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
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
    desc: "",
  },
  {
    name: "Borras Föderation",
    population: "350 Tausend",
    government: "Förderation",
    ruler: "Keiner",
    language: "Common",
    religion: ["Keine"],
    flag: borrasflag,
    desc: "",
  },
  {
    name: "Sinocard",
    population: "450 Tausend",
    government: "Autokratie",
    ruler: "Xafirex",
    language: "Drakonisch",
    religion: ["Keine"],
    flag: sinocardflag,
    desc: "",
  },
  {
    name: "Aston",
    population: "Unbekannt",
    government: "Oligarchie",
    ruler: "Zirkel des Waldes",
    language: "Elvisch",
    religion: ["Mondgöttin"],
    flag: astonflag,
    desc: "",
  },
];
