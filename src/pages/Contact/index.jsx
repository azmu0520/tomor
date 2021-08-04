import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import CustomButton from '../../components/Button';
import emailjs from 'emailjs-com';
import { Form, MianWrap, ItemWrap, Input, textArea } from './style';

const Contact = () => {
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
    <div>
      <Grid container className='section marginTop'>
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className='section-title'>
              <span></span>
              <Typography variant='h6'>Contact Form</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Form onSubmit={sendMail}>
                  <MianWrap>
                    <ItemWrap>
                      <Input type='text' placeholder='Name' name='name' />

                      <Input
                        type='email'
                        className='email'
                        placeholder='E-mail'
                        name='email'
                      />
                    </ItemWrap>
                    <ItemWrap>
                      <Input type='text' placeholder='Subject' name='subject' />
                    </ItemWrap>
                    <ItemWrap>
                      <textArea
                        type='text'
                        cols='30'
                        rows='8'
                        placeholder='Your message'
                        name='message'
                      />
                    </ItemWrap>
                    <ItemWrap>
                      <Input
                        className='btn'
                        type='submit'
                        value='Send Message'
                      />
                    </ItemWrap>
                  </MianWrap>
                </Form>
                {/* <Grid item xs={12} sm={6}>
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
                </Grid> */}
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
                    <a target='_blank' href={resumeData.socials[key].link}>
                      {resumeData.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
