import alephiaflag from "./alephiaflag.png";

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
    flag: "",
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
    government: "Aristokratie",
    ruler: "Kreis des Feuers",
    language: "Common",
    religion: ["Salona"],
    flag: "",
    desc: "",
  },
  {
    name: "Borras Region",
    population: "350 Tausend",
    government: "Aristokratie",
    ruler: "Keiner",
    language: "Common",
    religion: ["Keine"],
    flag: "",
    desc: "",
  },
  {
    name: "Sinocard",
    population: "100 Tausend",
    government: "Monarchie",
    ruler: "Xafirex",
    language: "Drakonisch",
    religion: ["Keine"],
    flag: "",
    desc: "",
  },
  {
    name: "Aston",
    population: "Unbekannt",
    government: "Aristokratie",
    ruler: "Zirkel des Waldes",
    language: "Elvisch",
    religion: ["Mondgöttin"],
    flag: "",
    desc: "",
  },
];
