import { Grid, Icon, Paper, Typography, TextField } from '@material-ui/core';
import React from 'react';
import './style.css';
import resumeData from '../../utils/resumeData';
import CustomTimeLine from '../../components/CustomTimeLine';
import { Work } from '@material-ui/icons';
import SchoolIcon from '@material-ui/icons/School';
import TimelineItem from '@material-ui/lab/TimelineItem';
import { TimeLineCustomSeparator } from '../../components/CustomTimeLine';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CustomButton from '../../components/Button';
import emailjs from 'emailjs-com';
const Resume = () => {
  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_q7yahvo',
        'template_t1cdm6l',
        e.target,
        'user_67JngnoFNDpDLTCnk62Zm'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      {/* About */}
      <Grid container className='section'>
        <Grid item className='section-title'>
          <span></span>
          <Typography variant='h6'>About me</Typography>
        </Grid>
        <Grid xs={12} item>
          <Typography className='about-text'>{resumeData.about}</Typography>
        </Grid>
      </Grid>
      {/* Experince */}
      <Grid container className='section'>
        <Grid item className='section-title'>
          <span></span>
          <Typography variant='h6'>Resume</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {/* experinece */}
            <Grid item sm={12} md={6}>
              <CustomTimeLine title='Work Experinces' icon={<Work />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <TimeLineCustomSeparator />
                    <TimelineContent>
                      <Typography className='edu-title'>
                        {experience.title}
                      </Typography>
                      <Typography className='edu-date' variant='caption'>
                        {experience.date}
                      </Typography>
                      <Typography className='edu-des' variant='body2'>
                        {experience.describtion}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeLine>
            </Grid>
            {/* education */}
            <Grid item sm={12} md={6}>
              <CustomTimeLine title='Study Experiences' icon={<SchoolIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <TimeLineCustomSeparator />
                    <TimelineContent>
                      <Typography className='edu-title'>
                        {education.title}
                      </Typography>
                      <Typography className='edu-date' variant='caption'>
                        {education.date}
                      </Typography>
                      <Typography className='edu-des' variant='body2'>
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

      {/* Skills */}
      <Grid container className='section' spacing={3} justify='space-between'>
        {resumeData.skills.map((skill) => (
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={0} className='skill'>
              <Typography variant='h6' className='skill-title'>
                {skill.title}
              </Typography>
              {skill.describtion.map((element) => (
                <Typography variant='body2' className='skill-describtion'>
                  <TimelineDot variant={'outlined'} className='timeline-dot' />
                  {element}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* Contact */}
      <Grid container className='section marginTop'>
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className='section-title'>
              <span></span>
              <Typography variant='h6'>Contact Form</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='name' label='Name' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='email' label='E-mail' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name='message'
                    label='Message'
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text='Submit' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Grid container className='ContactMargin'>
            <Grid item className='section-title'>
              <span></span>
              <Typography variant='h6'>Contact Information</Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={12}>
                <Grid item xs={12}>
                  <Typography className='contactinfo'>
                    <span>Address: </span> {resumeData.adress}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactinfo'>
                    <span>Phone: </span> {resumeData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactinfo'>
                    <span>Email: </span> {resumeData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container className='contactInfo-SocialCon'>
                {Object.keys(resumeData.socials).map((key) => (
                  <Grid item className='contactInfo-social'>
                    <a href={resumeData.socials[key].link}>
                      {resumeData.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
