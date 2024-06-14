import React, { useState, useEffect } from "react";
import styles from "./FeedbackForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#root"); // Встановлення основного елемента для модального вікна
  }, []);

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
    setIsModalOpen(true); // Після відправлення форми відкриваємо модальне вікно
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.feedbackFormContainer}>
      <form className={styles.feedbackForm} onSubmit={handleSubmit}>
        <h2>Leave a feedback</h2>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
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
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </div>
      </form>
      {/* Модальне вікно, яке відображатиметься після відправлення форми */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modalContent}>
          <button className={styles.closeButton} onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <p>Thank you for your feedback!</p>
        </div>
      </Modal>
    </div>
  );
};

export default FeedbackForm;
