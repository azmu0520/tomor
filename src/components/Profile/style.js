import styled from "styled-components";
export const ProfileShadow = styled.div`
  border-radius: 6px;
  width: 100%;
  display: inline-block;
`;

export const ProfileImg = styled.div`
  margin-top: -10px;
  img {
    width: 100%;
    border-radius: 30px;
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

export const ProfileInfo = styled.div`
  top: 0;
  left: 0;
  margin: -40px 10px 30px;
`;
