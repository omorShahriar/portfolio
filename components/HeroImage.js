import styles from "./HeroImage.module.css";
const Image = () => (
  <img className={styles.hero} src="/dp.jpg" alt="Photographer in a market." />
);
const Svg = () => {
  return (
    <svg width="0" height="0">
      <clipPath id="svgClip" clipPathUnits="objectBoundingBox">
        <path d="M0.889854 0.750452C0.835208 0.902681 0.697102 0.985378 0.475535 0.998544C0.253969 1.01171 0.111888 0.935595 0.0492935 0.770201C-0.0133014 0.604806 -0.0162821 0.434886 0.0403514 0.26044C0.0969849 0.0859945 0.246517 -0.000817063 0.488949 5.79477e-06C0.73138 0.000828653 0.872467 0.0880516 0.91221 0.261675C0.951953 0.435298 0.944501 0.598223 0.889854 0.750452Z"></path>
      </clipPath>
    </svg>
  );
};

const HeroImage = () => (
  <div className="md:order-none order-first">
    <Svg />
    <Image />
  </div>
);

export default HeroImage;
