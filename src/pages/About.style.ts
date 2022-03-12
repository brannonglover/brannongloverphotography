import styled from 'styled-components/macro';

export const About = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-top: 2em;

    @media (min-width: 1440px) {
        max-width: 1200px;
    }
`;

export const PhotoBox = styled.div`
    max-width: 85%;
    height: auto;
    margin: 0 auto;
`;

export const Photo = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

export const AboutMeContainer = styled.div`
    display: grid;
    grid-template-columns: 55% 1fr;
    column-gap: 3em;

    @media (min-width: 1440px) {
        max-width: 85%;
        margin: 0 auto;
        padding-top: 1em;
    }
`;

export const AboutMe = styled.section``;

export const Info = styled.section``;

export const Heading = styled.h1`
    font-size: 2rem;

`;

export const Paragraph = styled.p`
    font-size: 1rem;
    margin: 1em 0;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
`;