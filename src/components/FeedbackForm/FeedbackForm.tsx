// src/components/FeedbackForm/FeedbackForm.tsx

import React, { useState } from "react";
import styles from "./FeedbackForm.module.css";

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Можна тут додати API call для надсилання відгуку
    console.log({
      name,
      email,
      feedback,
    });

    // Очистити поля після відправлення
    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <div className={styles.feedbackFormContainer}>
      <form className={styles.feedbackForm} onSubmit={handleSubmit}>
        <h2>Залишити відгук</h2>
        <div className={styles.formGroup}>
          <label htmlFor="name">Ім'я</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="feedback">Відгук</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Відправити
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
