import styled from 'styled-components/macro';

const HeaderContainer = styled.div`
    padding-top: 2em;
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
    width: 100%;
`;

export const HeaderTitle = styled.h1`
    font-size: 35px;
    text-align: center;
    margin: .2em 0;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const HeaderTagline = styled.p`
    font-size: 12px;
    text-align: center;
    color: #aaa;
`;

export default HeaderContainer;