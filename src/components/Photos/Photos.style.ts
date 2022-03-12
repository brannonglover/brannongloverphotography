import styled from 'styled-components/macro';

export const PhotosContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 1.5em;
`;

export const Photo = styled.img`
    width: 100%;
    height: auto;
    padding: .1em;

    @media (min-width: 1440px) {
        width: auto;
        max-height: 26vw;
    }
    @media (min-width: 1920px) {
        max-height: 19vw;
    }
`;