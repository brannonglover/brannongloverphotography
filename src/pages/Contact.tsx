import { ChangeEvent } from 'react';
import * as S from './Contact.style';

interface IContactProps {
    collectInputs: (e: ChangeEvent<HTMLInputElement>) => void
    collectTextArea: (e: ChangeEvent<HTMLTextAreaElement>) => void
    sendData: () => void
}

const Contact: React.FC<IContactProps> = ({ collectInputs, collectTextArea, sendData }: IContactProps) => {
    return (
        <S.Contact>
            <S.Form>
                <S.Label htmlFor="fullname">Name</S.Label>
                <S.Input id="fullname" onChange={collectInputs} name="fullname" type="text" />
                <S.Label htmlFor="email">Email Address</S.Label>
                <S.Input id="email" onChange={collectInputs} name="email" type="text" />
                <S.Label htmlFor="message">Message</S.Label>
                <S.TextArea id="message" onChange={collectTextArea} name="message" />
                <S.Button onClick={sendData} type="button">Submit</S.Button>
            </S.Form>
            <S.Info></S.Info>
        </S.Contact>
    )
}

export default Contact;