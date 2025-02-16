import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Gallery, ModalInfo } from "../../components/App.types";

interface ImageGalleryProps {
  gallery: Gallery;
  onClick: (params: ModalInfo) => void;
}

const ImageGallery = ({ gallery, onClick }: ImageGalleryProps) => {
  if (!gallery) {
    return;
  }

  return (
    <>
      <div>
        <ul className={css.list}>
          {gallery.map((item) => {
            return (
              <li key={item.id} className={css.item}>
                <ImageCard
                  src={item.urls.small}
                  alt={item.description}
                  onClick={onClick}
                  modalSrc={item.urls.regular}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ImageGallery;
