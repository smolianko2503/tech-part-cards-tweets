import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyled';
import { Suspense } from 'react';

import { StyledLink, StyledLinkContainer, Header } from './Layout.styled';


const Layout = () => {
  return (
    <div>
      
      <Header>
        <StyledLinkContainer>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/tweets">Tweets</StyledLink>
        </StyledLinkContainer>
      </Header>

      <main>
        <Suspense fallback={<div>..........</div>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </div>
  );
};

export default Layout;
