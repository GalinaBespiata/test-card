import { useEffect, useState } from 'react';
import * as Styled from './StyledComponents';
import { ReactComponent as LogoGoIt } from '../images/logoGoIt.svg';
import { ReactComponent as HeroBackground } from '../images/messagesPicture.svg';
import { ReactComponent as FrameOfAvatar } from '../images/frame.svg';
import { ReactComponent as Avatar } from '../images/Boy.svg';

let followers = 100500;
const options = {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
  useGrouping: true,
};
function HomePage() {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    let isFromStorage = JSON.parse(localStorage.getItem('followersStorage'));
    console.log(isFromStorage);

    if (followers !== isFromStorage) {
      setIsToggled(!isToggled);
      console.log(isToggled);
    }

    localStorage.removeItem('followersStorage');
  }, []);

  const handleToggle = () => {
    isToggled ? (followers += 1) : (followers -= 1);
    setIsToggled(!isToggled);
    localStorage.setItem('followersStorage', JSON.stringify(followers));
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
      <Avatar
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
          <Styled.ButtonFollowing type="button" onClick={handleToggle}>
            Following
          </Styled.ButtonFollowing>
        ) : (
          <Styled.ButtonFollow type="button" onClick={handleToggle}>
            Follow
          </Styled.ButtonFollow>
        )}
      </Styled.FollowersBlock>
    </Styled.UserCard>
  );
}
export default HomePage;
