import React from "react";
import { Typography } from "@material-ui/core";
import { ProfileShadow, ProfileName, ProfileInfo, ProfileImg } from "./style";
import myImg from "../../assets/images/user.png";
import CustomTimeLine, { TimeLineCustomSeparator } from "../CustomTimeLine";
import resumeData from "../../utils/resumeData";
import PersonIcon from "@material-ui/icons/PersonOutlineOutlined";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import "./Profile.css";
import CustomButton from "../Button";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";

const Profile = () => {
  const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
      <TimeLineCustomSeparator />
      <TimelineContent className="timeline-content">
        {link ? (
          <Typography className="typography">
            <span>{title}</span>
            <a href={link} target="_blank">
              {text}{" "}
            </a>
          </Typography>
        ) : (
          <Typography className="typography">
            <span> {title} </span>
            {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
  return (
    <ProfileShadow>
      <ProfileName>
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </ProfileName>
      <ProfileImg>
        <img src={myImg} alt="something is wrong" />
      </ProfileImg>
      <ProfileInfo>
        <CustomTimeLine icon={<PersonIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Job" text={resumeData.title} />
          <CustomTimelineItem title="Mail " text={resumeData.email} />
          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeLine>
        <div className="btn-wrap">
          <CustomButton text={"Download Cv"} icon={<GetAppRoundedIcon />} />
        </div>
      </ProfileInfo>
    </ProfileShadow>
  );
};

export default Profile;
