import {
  TweetsListItem, CardImage, ButtonOnFollow, LogoImage, PictureImage, RectangleImage, TweetsText, FollowerssText, EllipseBox} from './TweetsItem.styled';
import Logo  from '../../images/Logo.png'
import Picture from '../../images/picture2 1.png'
import Rectangle from '../../images/Rectangle 1.png'

const TweetsItem = ({ data, updateValueFollowers }) => {
  const { id, user, tweets, followers, avatar, isFollow } = data;
  return (
    
    <TweetsListItem>
      <LogoImage src={Logo} alt='Logo' />
      <PictureImage src={Picture} alt='Pict' />
      <EllipseBox></EllipseBox>
      <RectangleImage src={Rectangle} alt='Rectangle' />
      <CardImage src={avatar} alt={user} />
      <TweetsText>{tweets} TWEETS</TweetsText>
      <FollowerssText>{followers} FOLLOWERS</FollowerssText>
      <ButtonOnFollow type="button" isFollow={isFollow} onClick={() => updateValueFollowers(id)}>
        {!isFollow && 'Follow'}
        {isFollow && 'Following'}
      </ButtonOnFollow>
</ TweetsListItem>
   
    
  );
};

export default TweetsItem;
