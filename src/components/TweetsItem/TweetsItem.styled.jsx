import styled from 'styled-components';

export const TweetsListItem = styled.li`
  position: relative;
  display: inline-block;
  width: 380px;
  height: 460px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const LogoImage = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;
export const PictureImage = styled.img`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
`;

export const EllipseBox = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  z-index: 200;
`;

export const RectangleImage = styled.img`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;
`;

export const CardImage = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  left: 159.48px;
  top: 187.42px;
  border-radius: 50%;
  z-index: 1000;
`;

export const ButtonOnFollow = styled.button`
  width: 196px;
  height: 50px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  position: absolute;
  top: 374px;
  left: 92px;
  border-style: none;

  background-color: ${({ isFollow }) => (isFollow ? '#5CD3A8' : '#EBD8FF')};

  :hover {
    box-shadow: 0px 0px 28px 9px rgba(48, 224, 32, 1);
  }

  transition-property: box-shadow, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const TweetsText = styled.p`
  position: absolute;
  width: 132px;
  height: 24px;
  left: 124px;
  top: 284px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;

  color: #ebd8ff;
`;

export const FollowerssText = styled.p`
  position: absolute;
  width: 214px;
  height: 24px;
  left: 83px;
  top: 324px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;

  color: #ebd8ff;
`;
