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
    desc: "Das Imperium zeichnet sich durch seine starke Bevölkerung und die besonders ausgeprägte Militärmacht wieder. An Strategie und Innovation, kann keine andere Nation sich mit ihnen vergleichen. Kultureller und Sozialer Status sind besonders von den Fähigkeiten eines Individuuen abhängig, was zu einer kompetenten Bevölkerung führt. Das Palatinische Imperium liegt in einer überwiegend Mediterranen Klimazone, was für ausreichend Nahrung durch besonders fruchtbaren Boden sorgt.",
    language: "Common",
    religion: ["Keine"],
  },
  {
    name: "Subarra",
    population: "1 Millionen",
    government: "Monarchie",
    ruler: "Amon-Ra",
    desc: "Die Subarra ist das Hoheitsgebiet des Amon-Ra, dem Herrscher von Alephia. Die Sand und Steinwüste beherbergt außerhalb der Hauptstadt Alephia nur kleine Stämme welche sich über all in der Wüste verteilt heimisch gemacht haben.",
    flag: alephiaflag,
    language: "Sarraka",
    religion: ["Sonnengott Ra"],
  },
  {
    name: "Feuerreich",
    population: "6 Millionen",
    government: "Theokratie",
    ruler: "Kreis des Feuers",
    language: "Common",
    religion: ["Salona"],
    flag: salonaflag,
    desc: "Das Feuerreich ist eine Ansammlung kleiner Staaten, welche nur im Kriegsfall geeint vom Kreis des Feuers geleitet werden. Freiheit und Selbstbestimung haben einen hohen Stellenwert, unter der Voraussetzung das diese im Rahmen der Weisheit von Salona liegen. Ein großer Zusammenhalt zwischen den Dörfern zeichnet sich durchs Feuerreich aus.",
  },
  {
    name: "Borras Föderation",
    population: "350 Tausend",
    government: "Förderation",
    ruler: "Keiner",
    language: "Common",
    religion: ["Keine"],
    flag: borrasflag,
    desc: "Ein Zusammenschluss zwischen, Brivas, Genava und Lunsar um gemeinsam den Norden Demoras zu regieren. Jedoch gibt es oft Streitigkeiten zwischen Brivas und Genava. Die Region liegt in einer eher kalten Klimazone, was dazu führt das sich die Bewohner der Region in der Jagd der artenreichen Faune spezialisiert haben.",
  },
  {
    name: "Sinocard",
    population: "450 Tausend",
    government: "Autokratie",
    ruler: "Xafirex",
    language: "Drakonisch",
    religion: ["Keine"],
    flag: sinocardflag,
    desc: "Nach dem Kataklysmus haben sich die Dragonborn von Demora in die felsige Küstenregion zurück gezogen und für eine lange Zeit kein Kontakt zum Rest des Kontinents gehabt. Erst als das Imperium versuchte die Avium Einöde zu durchqueren wurde Sinocard wieder aktiv. Sinocard beherbergt berüchtigte Drachenjäger.",
  },
  {
    name: "Aston",
    population: "Unbekannt",
    government: "Oligarchie",
    ruler: "Zirkel des Waldes",
    language: "Elvisch",
    religion: ["Mondgöttin"],
    flag: astonflag,
    desc: "Kurz nach dem Auftauchen der Götter haben sich die Waldelfen in diesem Gebiet niedergelassen. Hier leben sie im einklang mit der Natur in pflegen eine tiefe Verbindung zu der Feywild. Fremden und Außenstehenden sind sie eher abgeneigt, wenn sich doch Jemand als würdig erweist können sie sehr herzlich sein.",
  },
];
