import Family from '../assets/family.png';
import * as S from './About.style';

const About = () => {
    return (
        <S.About>
            <S.PhotoBox>
                <S.Photo src={Family} alt="Brannon Glover's Family" />
            </S.PhotoBox>
            <S.AboutMeContainer>
                <S.AboutMe>
                    <S.Heading>About Me</S.Heading>
                    <S.Paragraph>Photos by Brannon Glover</S.Paragraph>
                    <S.Paragraph>Hey there, thanks for stopping by.  Photography is a passion of mine next to brewing beer, when I'm not working full-time or being with my family.  I've been in photography for a few years now, but it's been mainly a small hobby of mine until recently.  I've now put more focus into my photography and am enjoying every opportunity I get.  Please have a look around, especially my portfolio, and if you find yourself interested in getting in touch with me, you can use the contact me link above and I'll get back to you very shortly.</S.Paragraph>
                    <S.Paragraph>Thanks!</S.Paragraph>
                    <S.Paragraph>Brannon Glover</S.Paragraph>
                </S.AboutMe>
                <S.Info>
                    <S.Paragraph>Brannon Glover Photography</S.Paragraph>
                    <S.Paragraph>brannonglover@gmail.com</S.Paragraph>
                    <S.Paragraph>404.809.7225</S.Paragraph>
                </S.Info>
            </S.AboutMeContainer>
        </S.About>
    )
}

export default About;