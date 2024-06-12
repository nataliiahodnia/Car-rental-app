import React, { useState } from 'react';
import styles from './PromotionsSection.module.css';

interface Promotion {
  title: string;
  description: string;
  details: string;
}

const PromotionsSection: React.FC = () => {
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion | null>(null);

  const promotions: Promotion[] = [
    {
      title: 'Special Weekend Offer',
      description: 'Get 20% off on weekend car rentals. Book now!',
      details: 'This special weekend offer allows you to save 20% on your rental fees for cars booked during weekends. Don\'t miss out on this amazing deal! Terms and conditions apply.',
    },
    {
      title: 'Summer Sale',
      description: 'Enjoy up to 30% off on all car models for summer trips.',
      details: 'Take advantage of our summer sale and enjoy up to 30% off on all car models for your summer trips. Plan your adventure today and save big! Limited time offer.',
    },
    {
      title: 'Refer a Friend',
      description: 'Refer a friend and both get $50 off on your next rental!',
      details: 'Refer a friend to our car rental service and both of you will receive $50 off on your next rental. Share the savings with your friends and enjoy your next trip even more!',
    },
  ];

  const handleLearnMoreClick = (promotion: Promotion) => {
    setSelectedPromotion(promotion);
  };

  const handleCloseModal = () => {
    setSelectedPromotion(null);
  };

  return (
    <div className={styles.promotionsSection}>
      <div className={styles.promotionCards}>
        {promotions.map((promotion, index) => (
          <div className={styles.promotionCard} key={index}>
            <h3>{promotion.title}</h3>
            <p>{promotion.description}</p>
            <button className={styles.learnMore} onClick={() => handleLearnMoreClick(promotion)}>
              Learn More
            </button>
          </div>
        ))}
      </div>
      {selectedPromotion && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>{selectedPromotion.title}</h3>
            <p>{selectedPromotion.details}</p>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromotionsSection;
