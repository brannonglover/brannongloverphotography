import { Link } from "react-router-dom";
import MenuContainer, { MenuItem, MenuList } from "./Menu.style";

function Menu() {
  return (
    <MenuContainer>
      <MenuList>
        <MenuItem><Link to="/">portfolio</Link></MenuItem>
        <MenuItem><Link to="/about">about</Link></MenuItem>
        <MenuItem><Link to="/contact">contact</Link></MenuItem>
      </MenuList>
    </MenuContainer>
  );
}

export default Menu;
