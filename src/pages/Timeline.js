import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./Timeline.css";

import { historyEventData } from "../assets/HistoryEventData";


export function Timeline() {
  return <div className="timeline-container">

    <VerticalTimeline>
      <div className="timeline-content">
        {historyEventData.map((e, index) => <VerticalTimelineElement key={index} className="vertical-timeline-element" date={e.date} >
          <h3 className="vertical-timeline-element-title">{e.title}</h3>

          <p>{e.desc}</p>
        </VerticalTimelineElement>)}

      </div>
    </VerticalTimeline>
  </div>;
}
