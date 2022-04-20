import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./Timeline.css";

import { historyEventData } from "../data/HistoryEventData";
import { Footer } from "../components/footer/Footer";


export function Timeline() {
  return <div className="timeline-container">

    <VerticalTimeline>
      <div className="timeline-content">
        {historyEventData.map((e, index) => <VerticalTimelineElement key={index} className="vertical-timeline-element" date={e.date} >
          <h3 className="vertical-timeline-element-title">{e.title}</h3>
          {e.timeSpan !== undefined ? <h3 className="vertical-timeline-element-subtitle">{"Dauer: " +e.timeSpan}</h3> : null}
          {e.place !== undefined ? <h3 className="vertical-timeline-element-subtitle">{"Ort: " +e.place}</h3> : null}
          <p>{e.desc}</p>
        </VerticalTimelineElement>)}

      </div>
    </VerticalTimeline>
    <Footer/>
  </div>;
}
