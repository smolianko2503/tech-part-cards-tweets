import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TweetsCards = styled.div`
  padding: 20px;
`;

export const TweetsList = styled.ul`

list-style: none;
display: flex;
gap: 30px;
flex-wrap: wrap;
justify-content:center;
align-items: : center; 
padding: 0;
`;

export const ButtonOnLoadMore = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #ebd8ff;
  border: none;
  width: 100px;
  height: 28px;
  border-radius: 8px;
  :hover {
    background-color: #5cd3a8;
    transition-property: background-color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const LiknGoBack = styled(Link)`
  display: inline-flex;
  width: 100px;
  height: 28px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  padding: 8px 0;
  color: black;
  background-color: #ebd8ff;

  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 8px;
  :hover {
    background-color: orange;
    transition-property: background-color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
