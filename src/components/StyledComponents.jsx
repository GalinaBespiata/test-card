import styled from 'styled-components';

export const UserCard = styled.div`
  height: 460px;
  width: 380px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;
export const Avatar = styled.img`
  position: relative;
  bottom: -10px;
  transform: translate(0, -50%);
  height: 80px;
  width: 80px;
  display: inline-block;
  background-image: url('src/images/Boy.png');
  border-radius: 50%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
export const FollowersBlock = styled.div`
  position: relative;
  bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ebd8ff;
  text-transform: uppercase;
`;
export const Tweets = styled.p`
  text-align: center;
  margin-bottom: 16px;
`;
export const Followers = styled.p`
  text-align: center;
  margin-bottom: 26px;
`;

export const ButtonFollow = styled.button`
  width: 196px;
  height: 50px;
  text-align: center;
  color: rgba(55, 55, 55, 1);
  background-color: rgba(235, 216, 255, 1);
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
export const ButtonFollowing = styled.button`
  width: 196px;
  height: 50px;
  text-align: center;
  color: rgba(55, 55, 55, 1);
  background-color: rgba(92, 211, 168, 1);
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
