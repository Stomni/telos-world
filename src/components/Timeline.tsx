import { historyEventData } from "../assets/HistoryEventData";
import { TimelineItem } from "./TimelineItem";

import "./Timeline.css";

export function Timeline() {
  return (
    <>
      {historyEventData.length > 0 && (
        <div className="timeline">
          {historyEventData.map((data, index) => (
            <TimelineItem event={data} key={index} />
          ))}
        </div>
      )}
    </>
  );
}
