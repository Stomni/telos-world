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
    date: "40.000 b.D",
    timeSpan: undefined,
    place: undefined,
    desc: "Lorem Ipsum...",
  },
  {
    title: "Auftritt der Götter",
    date: "Neues Zeitalter a.D",
    timeSpan: undefined,
    place: undefined,
    desc: "Lorem Ipsum...",
  },
];
