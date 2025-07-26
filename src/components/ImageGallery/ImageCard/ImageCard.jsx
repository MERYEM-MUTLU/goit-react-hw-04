import css from "./ImageCard.module.css";

export default function ImageCard({ image, onClick }) {
  const { urls, alt_description } = image;

  return (
    <li className={css.card}>
      <img
        src={urls.small}
        alt={alt_description}
        className={css.image}
        onClick={() => onClick(image)} // Tıklama olay işleyicisi doğrudan <img> içinde
      />
      <div className={css.info}>
        <p>{alt_description || "Açıklama yok"}</p>
      </div>
    </li>
  );
}
