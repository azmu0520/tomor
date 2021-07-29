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
} from '@material-ui/core';
import './style.css';
import resumeData from '../../utils/resumeData';

const Portfolio = () => {
  const [tabs, setTabs] = useState('All');
  return (
    <Grid container className='section'>
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
          {[...new Set(resumeData.portfolio.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabs == 'All' ? 'customTab-item active' : 'customTab-item'
                }
              />
            )
          )}
        </Tabs>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          {resumeData.portfolio.map((project) => (
            <>
              {tabs == project.tag || tabs == 'All' ? (
                <Grow in timeout={1500}>
                  <Grid item>
                    <Card>
                      <CardActionArea>
                        <CardMedia />
                        <CardContent>
                          <Typography>{project.title}</Typography>
                          <Typography>{project.description}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grow>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
