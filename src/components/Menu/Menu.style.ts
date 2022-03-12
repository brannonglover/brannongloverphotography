import styled from 'styled-components/macro';

const MenuContainer = styled.div`
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    width: 303px;
`;

export const MenuList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    padding-left: 0;
`;

export const MenuItem = styled.li`
    padding-left: 0;
`;

export default MenuContainer;