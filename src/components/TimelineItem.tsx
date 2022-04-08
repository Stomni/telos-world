import { Event } from "../assets/HistoryEventData";

import "./TimelineItem.css";

export function TimelineItem({ event }: { event: Event }) {
  return (
    <>
      <div className="circle"></div>
      <div className="timeline-item">
        <div className="timeline-item-headline">
          <h5>{event.title}</h5>
          <h6>{event.date}</h6>
          <h6>{event.timeSpan}</h6>
          <h6>{event.place}</h6>
        </div>
        <div className="timeline-item-desc">
          <p>{event.desc}</p>
        </div>
      </div>
    </>
  );
}
