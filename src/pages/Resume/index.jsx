import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./style.css";
import resumeData from "../../utils/resumeData";
import CustomTimeLine from "../../components/CustomTimeLine";
import { Work } from "@material-ui/icons";
import SchoolIcon from "@material-ui/icons/School";
import TimelineItem from "@material-ui/lab/TimelineItem";
import { TimeLineCustomSeparator } from "../../components/CustomTimeLine";
import TimelineContent from "@material-ui/lab/TimelineContent";
const Resume = () => {
  return (
    <>
      {/* About */}
      <Grid container className="section">
        <Grid item className="section-title">
          <span></span>
          <Typography variant="h6">About me</Typography>
        </Grid>
        <Grid xs={12} item>
          <Typography className="about-text">{resumeData.about}</Typography>
        </Grid>
      </Grid>
      {/* Experince */}
      <Grid container className="section">
        <Grid item className="section-title">
          <span></span>
          <Typography variant="h6">Resume</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {/* experinece */}
            <Grid item sm={12} md={6}>
              <CustomTimeLine title="Work Experinces" icon={<Work />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <TimeLineCustomSeparator />
                    <TimelineContent>
                      <Typography className="edu-title">
                        {experience.title}
                      </Typography>
                      <Typography className="edu-date" variant="caption">
                        {experience.date}
                      </Typography>
                      <Typography className="edu-des" variant="body2">
                        {experience.describtion}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeLine>
            </Grid>
            {/* education */}
            <Grid item sm={12} md={6}>
              <CustomTimeLine title="Work Experience" icon={<SchoolIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <TimeLineCustomSeparator />
                    <TimelineContent>
                      <Typography className="edu-title">
                        {education.title}
                      </Typography>
                      <Typography className="edu-date" variant="caption">
                        {education.date}
                      </Typography>
                      <Typography className="edu-des" variant="body2">
                        {education.describtion}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeLine>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services */}
      <Grid container className="section"></Grid>
      {/* Skills */}
      <Grid container className="section"></Grid>
      {/* Contact */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
