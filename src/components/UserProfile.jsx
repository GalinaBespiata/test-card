import { useEffect, useState } from 'react';
import * as Styled from './StyledComponents';
import { ReactComponent as LogoGoIt } from '../images/logoGoIt.svg';
import { ReactComponent as HeroBackground } from '../images/messagesPicture.svg';
import { ReactComponent as FrameOfAvatar } from '../images/frame.svg';
import { ReactComponent as Avatar } from '../images/Boy.svg';
import Boy from '../images/Boy.png';

let initialFollowers = 100500;

const options = {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
  useGrouping: true,
};

function UserProfile() {
  const [isToggled, setIsToggled] = useState(false);
  const [followers, setFollowers] = useState(100500);

  useEffect(() => {
    const isToggledStory = JSON.parse(localStorage.getItem('toggledStorage'));
    const isFollowersStory = JSON.parse(
      localStorage.getItem('followersStorage')
    );
    isToggledStory ? setIsToggled(isToggledStory) : setIsToggled(false);
    isFollowersStory
      ? setFollowers(isFollowersStory)
      : setFollowers(initialFollowers);

    console.log(followers);
    console.log(isToggled);
  }, []);

  const handleToggle = () => {
    localStorage.setItem('toggledStorage', JSON.stringify(isToggled));
    localStorage.setItem('followersStorage', JSON.stringify(followers));
    if (!isToggled) {
      setFollowers(initialFollowers + 1);
    } else {
      setFollowers(initialFollowers);
    }
    setIsToggled(!isToggled);
  };

  return (
    <Styled.UserCard>
      <LogoGoIt
        style={{
          paddingTop: '20px',
          paddingLeft: '20px',
          alignSelf: 'flex-start',
        }}
      />
      <HeroBackground />
      <FrameOfAvatar style={{ position: 'relative', top: '18px' }} />

      <img
        src={Boy}
        alt="Boy"
        style={{
          position: 'relative',
          bottom: '-10px',
          transform: 'translate(0, -50%)',
          height: '80px',
          width: '80px',
          display: 'inline-block',
          backgroundImage: 'url(src/images/Boy.svg)',
          borderRadius: '50%',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Styled.FollowersBlock>
        <Styled.Tweets>777 tweets</Styled.Tweets>
        <Styled.Followers>
          {followers.toLocaleString('en-US', options)} Followers
        </Styled.Followers>
        {!isToggled ? (
          <Styled.ButtonFollow type="button" onClick={handleToggle}>
            Follow
          </Styled.ButtonFollow>
        ) : (
          <Styled.ButtonFollowing type="button" onClick={handleToggle}>
            Following
          </Styled.ButtonFollowing>
        )}
      </Styled.FollowersBlock>
    </Styled.UserCard>
  );
}
export default UserProfile;
