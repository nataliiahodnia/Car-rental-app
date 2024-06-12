// src/components/FeedbackButton/FeedbackButton.tsx

import React, { useState } from 'react';
import { BiCommentEdit } from "react-icons/bi";
import Modal from 'react-modal';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import styles from './FeedbackButton.module.css';

const FeedbackButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.feedbackButtonContainer}>
      <button onClick={openModal} className={styles.feedbackButton}>
        <BiCommentEdit className={styles.icon} />
        Feedback
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <button onClick={closeModal} className={styles.closeButton}>Закрити</button>
        <FeedbackForm />
      </Modal>
    </div>
  );
};

export default FeedbackButton;
