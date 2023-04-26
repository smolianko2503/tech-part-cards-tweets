import styled from 'styled-components';

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
background-color: #EBD8FF;
border: none;
width: 100px;
height: 28px;
border-radius: 8px;
:hover {
    background-color: #5CD3A8;
    transition-property: background-color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`