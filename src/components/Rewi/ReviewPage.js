import styles from "./RewiesPage.module.css";
import { useState } from "react";
import ReviewList from "./ReviewList/ReviewList";
import ReviewForm from "./ReviewForm/ReviewForm";
function ReviewPage() {
  const [reviews, setReview] = useState([]);
  const addReview = (review) => {
    setReview([review, ...reviews]);
  };
  return (
    <div className={styles.reviewPage}>
      <h1>customer Reviews</h1>
      <ReviewForm addReview={addReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default ReviewPage;
