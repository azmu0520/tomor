import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Typography } from "@material-ui/core";

import "./style.css";

const CustomTimeLine = ({ title, icon, children }) => {
  return (
    <Timeline className={"timeline"}>
      {/* Item Header */}
      <TimelineItem className={"timeline-firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline-first-header"}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className={"timeline-header"}>{title} </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}
      {/* Remaining Item */}
    </Timeline>
  );
};

export const TimeLineCustomSeparator = () => (
  <TimelineSeparator className={"separator-padding"}>
    <TimelineDot variant={"outlined"} className={"timeline-dot"} />
    <TimelineConnector />
  </TimelineSeparator>
);

export default CustomTimeLine;