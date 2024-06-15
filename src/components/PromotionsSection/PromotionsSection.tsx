import React, { useState, useEffect } from "react";
import styles from "./PromotionsSection.module.css";
import promotionsData from "../../data/promotion.json";

interface Promotion {
  title: string;
  description: string;
  details: string;
}

const PromotionsSection: React.FC = () => {
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion | null>(
    null
  );
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  useEffect(() => {
    setPromotions(promotionsData);
  }, []);

  const handleLearnMoreClick = (promotion: Promotion) => {
    if (!selectedPromotion) {
      setSelectedPromotion(promotion);
    }
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
            <button
              className={styles.learnMore}
              onClick={() => handleLearnMoreClick(promotion)}
            >
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
