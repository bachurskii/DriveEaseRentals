import styles from "./ReviewList.module.css";
import Review from "../Review/Review";
function ReviewList({ reviews }) {
  return (
    <div className={styles.reviewList}>
      {reviews.map((review, index) => {
        <Review key={index} review={review} />;
      })}
    </div>
  );
}
export default ReviewList;
