import strings from "../../common/strings";
import HeaderContainer, { HeaderTagline, HeaderTitle } from "./Header.style";

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>{strings.SITE_TITLE}</HeaderTitle>
      <HeaderTagline>{strings.TAGLINE}</HeaderTagline>
    </HeaderContainer>
  );
}

export default Header;
