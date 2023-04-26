import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyled';

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
        <Outlet />
      </main>
      <GlobalStyle />
    </div>
  );
};

export default Layout;
