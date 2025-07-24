import css from "./ImageCard.module.css";

function ImageCard({ image, onClick }) {
  const { urls, alt_description, user, likes } = image;

  return (
    <div className={css.card} onClick={() => onClick(image)}>
      <img src={urls.small} alt={alt_description} className={css.image} />
      <div className={css.info}>
        <p>By: {user.name}</p>
        <p> {likes} </p>
      </div>
    </div>
  );
}

export default ImageCard;
