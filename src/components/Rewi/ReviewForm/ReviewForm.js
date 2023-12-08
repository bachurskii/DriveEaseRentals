import styles from "./ReviewForm.module.css";
import { useState } from "react";
function ReviewForm({ addReview }) {
  const [review, setReview] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview({ author, content: review });
    setReview("");
    setAuthor("");
  };

  return (
    <form className={styles.reviewForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Your name"
        required
      />
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Your review"
        required
      ></textarea>
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
