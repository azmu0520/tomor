import { Grid, Icon, Paper, Typography } from "@material-ui/core";
import React from "react";
import "./style.css";
import resumeData from "../../utils/resumeData";
import CustomTimeLine from "../../components/CustomTimeLine";
import { Work } from "@material-ui/icons";
import SchoolIcon from "@material-ui/icons/School";
import TimelineItem from "@material-ui/lab/TimelineItem";
import { TimeLineCustomSeparator } from "../../components/CustomTimeLine";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
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
      {/* <Grid container className="section">
        <Grid item className="section-title">
          <span></span>
          <h6 className="section-title">My Services</h6>
          <Grid item xs={12}>
            <Grid container>
              {resumeData.services.map((service) => (
                <Grid item xs={12} sm={6} md={3}>
                  <div className="service">
                    <Icon className="service-icon">{service.icon}</Icon>
                    <Typography className="service-title">
                      {service.title}
                    </Typography>
                    <Typography className="service-describtion">
                      {service.describtion}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
      {/* Skills */}
      <Grid container className="section" spacing={3} justify="space-between">
        {resumeData.skills.map((skill) => (
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={0} className="skill">
              <Typography variant="h6" className="skill-title">
                {skill.title}
              </Typography>
              {skill.describtion.map((element) => (
                <Typography variant="body2" className="skill-describtion">
                  <TimelineDot variant={"outlined"} className="timeline-dot" />
                  {element}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* Contact */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
