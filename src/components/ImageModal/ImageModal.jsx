import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

function ImageModal({ isOpen, onRequestClose, image }) {
  if (!image) return null;

  const { urls, alt_description, user, likes } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={urls.regular} alt={alt_description} className={css.image} />
      <div className={css.details}>
        <p>
          <strong>Author:</strong> {user.name}
        </p>
        <p>
          <strong>Likes:</strong> {likes}
        </p>
        {alt_description && (
          <p>
            <strong>Description:</strong> {alt_description}
          </p>
        )}
      </div>
    </Modal>
  );
}

export default ImageModal;
