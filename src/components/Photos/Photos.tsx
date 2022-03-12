import * as S from "./Photos.style";
import Family from "../../assets/DSC_0152-2-Edit.jpeg";
import Wedding from "../../assets/DSC_0034-Edit.jpeg";
import Hands from "../../assets/DSC_0233.jpeg";
import MyKids from "../../assets/DSC_0029.jpeg";

const Photos: React.FC = (): JSX.Element => {
  return (
    <S.PhotosContainer>
      <S.Photo src={Family} alt="" />
      <S.Photo src={Wedding} alt="" />
      <S.Photo src={Hands} alt="" />
      <S.Photo src={MyKids} alt="" />
    </S.PhotosContainer>
  );
};

export default Photos;
