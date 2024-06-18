import styles from "./RoundedImage.module.css";

function RoundedImage({ src, alt, width }) {
  return (
    <img
      className={
        width
          ? `${styles.rounded_image} ${styles[width]}`
          : `${styles.rounded_image}`
      }
      src={src}
      alt={alt}
    />
  );
}

export default RoundedImage;
