import React from "react";
import { Typography } from "@material-ui/core";
import { ProfileShadow, ProfileName, ProfileInfo, ProfileImg } from "./style";
import myImg from "../../assets/images/user.png";
import CustomTimeLine from "../CustomTimeLine";
const Profile = () => {
  return (
    <ProfileShadow>
      <ProfileName>
        <Typography className="name">Azizbek</Typography>
        <Typography className="title">Azizbek</Typography>
      </ProfileName>
      <ProfileImg>
        <img src={myImg} alt="something is wrong" />
      </ProfileImg>
      <ProfileInfo>
        <CustomTimeLine />
        <br />
        <button>my button</button>
      </ProfileInfo>
    </ProfileShadow>
  );
};

export default Profile;
