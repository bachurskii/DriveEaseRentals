import styles from "./Review.module.css";
function Review({ review }) {
  return (
    <div className={styles.review}>
      <h3>{review.author}</h3>
      <p>{review.content}</p>
    </div>
  );
}
export default Review;
