import React from "react";
import Modal from "react-modal";
import { Advert } from "../../redux/slices/advertsSlice";
import styles from "./CarDetailsModal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  car: Advert;
}

const CarDetailsModal: React.FC<Props> = ({ isOpen, onClose, car }) => {
  Modal.setAppElement("#root");

  const accessories = Array.isArray(car.accessories)
    ? car.accessories.join(", ")
    : "";
  const functionalities = Array.isArray(car.functionalities)
    ? car.functionalities.join(", ")
    : "";

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modalContentItem}>
          <img
            className={styles.carImg}
            src={car.img}
            alt={`${car.make} ${car.model}`}
          />
          <div className={styles.details}>
            <h2 className={styles.detailsTitle}>
              {car.make} <span className={styles.model}>{car.model}</span>,{" "}
              {car.year}
            </h2>

            <p className={styles.descriptionCard}>
              {car.address} &#10072; Id:{car.id} &#10072; Year:{car.year}{" "}
              &#10072; Type:{car.type}&#10072; Fuel Consumption:
              {car.fuelConsumption} &#10072; Engine Size:
              {car.engineSize}&#10072;
            </p>

            <p className={styles.description}>{car.description}</p>

            <p className={styles.description}>
              Accessories and functionalities:
            </p>
            <p className={styles.descriptionCard}>
              &#10072; {accessories} &#10072; {functionalities} &#10072;
            </p>

            <p className={styles.description}>Rental Conditions:</p>

            <p className={styles.descriptionItem}>
              <span className={styles.oval}>{car.rentalConditions}</span>
              <span className={styles.oval}>
                Mileage:{" "}
                <span className={styles.mileage}>
                  {parseInt(car.mileage, 10).toLocaleString()}
                </span>
              </span>
              <span className={styles.oval}>
                Price: <span className={styles.price}>{car.rentalPrice}$</span>
              </span>
            </p>

            <a href="tel:+380730000000" className={styles.rentalLink}>
              Rental car
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CarDetailsModal;
