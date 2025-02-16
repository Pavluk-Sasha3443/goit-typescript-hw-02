import css from "./ImageCard.module.css";
import { ModalInfo } from "../../components/App.types";

interface ImageCardProps {
  src: string;
  alt: string;
  onClick: (params: ModalInfo) => void;

  modalSrc: string;
}

const ImageCard = ({ src, alt, onClick, modalSrc }: ImageCardProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={css.img}
      onClick={() => onClick({ modalSrc, alt })}
    />
  );
};

export default ImageCard;
