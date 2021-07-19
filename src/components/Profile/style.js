import styled from "styled-components";
// import myImage from "../../assets/images/user.jpg";
export const ProfileShadow = styled.div`
  background-color: whitesmoke;
  border-radius: 6px;
  width: 100%;
  display: inline-block;
`;

export const ProfileImg = styled.div`
  margin-top: -10px;
  /* -webkit-clip-path: polygon(0.9%, 100% 0, 100% 94%, 0 100%);
  clip-path: polygon(0.9%, 100% 0, 100% 94%, 0 100%); */
  img {
    width: 100%;
  }
`;
export const ProfileName = styled.div`
  line-height: 18px;
  padding: 20px;
  .name {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
  }
  .title {
    font-size: 13px;
    color: #777;
  }
`;

export const ProfileInfo = styled.div``;
