export type Event = {
  title: string;
  date: string;
  timeSpan?: string;
  desc: string;
  place?: string;
};

export const historyEventData: Event[] = [
  {
    title: "Schöpfung Telos",
    date: "40.000 b.D\n(before Divinity)",
    timeSpan: undefined,
    place: undefined,
    desc: "Lorem Ipsum...",
  },
  {
    title: "Auftritt der Götter",
    date: "1 a.D (after Divinity)",
    timeSpan: undefined,
    place: undefined,
    desc: "Lorem Ipsum...",
  },
  {
    title: "Sanctus Bellum",
    date: "50 a.D",
    timeSpan: "100 Jahre",
    place: undefined,
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  {
    title: "Verbannte Titanen",
    date: "150 a.D",
    desc: "",
  },
  { title: "Arkanes Zeitalter", date: "850 a.D", desc: "" },
  { title: "Kataklysmus", date: "2000 a.D", desc: "", timeSpan: "100 Jahre" },
  { title: "Lazarus Blockade", date: "2100 a.D", desc: "" },
  { title: "Neue Titanen", date: "200 a.L (after Lazarus)", desc: "", place: "Demora" },
  { title: "Asche Fall", date: "400 a.L", desc: "", place: "Borras Region" },
  {
    title: "Aufmarsch von Palatin",
    date: "500 a.L",
    place: "Demora",
    desc: "",
  },
  {
    title: "Dunkle Sonne",
    date: "11. Kythorn 876",
    desc: "",
    place: "Thracian",
  },
  {
    title: "Titan Krieg",
    date: "1072 a.L",
    place: "Demora",
    timeSpan: "5 Jahre",
    desc: "",
  },
  {
    title: "Frieden zwischen Feuer und Stahl",
    date: "1077 a.L",
    desc: "",
    place: "Demora",
  },
  {
    title: "Beginn der Stone Garden Campaign",
    date: "15. Pharast 1107",
    desc: "",
    place: "Capsan, Demora",
  },
  {
    title: "Angriff auf Erastin",
    date: "10. Rova 1107",
    desc: "",
    place: "Erastin, Demora",
  },
];
