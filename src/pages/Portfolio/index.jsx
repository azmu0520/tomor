import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Grow,
  Tab,
  Tabs,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import './style.css';
import resumeData from '../../utils/resumeData';
import styled from 'styled-components';
// import { ImagesGallery } from '../../components/ImagesGallery/ImagesGallry';

const Portfolio = () => {
  const [tabs, setTabs] = useState('All');
  const [dialog, setDialog] = useState(false);
  return (
    <Grid container spacing={1} className='section'>
      <Grid item className='section-title'>
        <span></span>
        <Typography variant='h6'>Portfolio</Typography>
      </Grid>
      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabs}
          indicatorColor='white'
          className='custom-tabs'
          onChange={(event, newValue) => setTabs(newValue)}
        >
          <Tab
            label='All'
            value='All'
            className={
              tabs == 'All' ? 'customTab-item active' : 'customTab-item'
            }
          />
          {[...new Set(resumeData.portfolio.map((v) => v.tag))].map(
            (tag, i) => (
              <Tab
                key={i}
                label={tag}
                value={tag}
                className={
                  tabs == tag ? 'customTab-item active' : 'customTab-item'
                }
              />
            )
          )}
        </Tabs>
      </Grid>
      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={4}>
          {resumeData.portfolio.map((project) => (
            <>
              {tabs == project.tag || tabs == 'All' ? (
                <Grid item xs={12} sm={6} lg={3}>
                  <Grow in timeout={1500}>
                    <Card
                      className='customCard'
                      onClick={() => setDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className='customCard-img'
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography className='customCard-title'>
                            {project.title}
                          </Typography>
                          <Typography
                            className='customCard-describtion'
                            variant='body2'
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      {/* Dialog */}
      <Dialog
        className='dialog'
        maxWidth={'lg'}
        open={Boolean(dialog)}
        fullWidth
        onClose={() => setDialog(false)}
      >
        <DialogTitle onClose={() => setDialog(false)}>
          {dialog.title}
        </DialogTitle>

        {/* <img src={dialog.image} alt='' className='dialog-img' /> */}
        <DialogContentStyled>
          <Typography className='dialog-description'>
            {dialog.description}
          </Typography>
        </DialogContentStyled>
        <DialogActions className='dialog-action'>
          {dialog?.links?.map((link) => (
            <a href={link.link} target='_blank' className='dialog-icon'>
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;

const DialogContentStyled = styled(DialogContent)`
  overflow-y: hidden;
`;
