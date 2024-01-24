import starIcon from "../assets/star.svg";

const Rating = ({ value }) => {
  const stars = Array(value).fill(starIcon);

  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="Star Icon" />
      ))}
    </>
  );
};

export default Rating;
