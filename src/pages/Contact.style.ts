import styled from 'styled-components/macro';

export const Contact = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-top: 2em;

    @media (min-width: 1440px) {
        max-width: 1200px;
        display: grid;
        grid-template-columns: 55% 1fr;
        column-gap: 5em;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 80%;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    padding-bottom: .5em;
`;

export const Input = styled.input`
    padding: .5em 1em;
    margin-bottom: 1.3em;
`;

export const TextArea = styled.textarea`
    min-height: 10em;
`;

export const Button = styled.button`
    border: none;
    background: #418bd1;
    border-radius: 5px;
    padding: .5em 1.5em;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    max-width: 25%;
    margin-top: 1em;
`;

export const Info = styled.div``;

export const Paragraph = styled.p`
    font-size: 1rem;
    margin: 1em 0;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
`;