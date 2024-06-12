import React from 'react';
import Modal from 'react-modal';
import { Advert } from '../../redux/slices/advertsSlice';
import styles from './CarDetailsModal.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void; // Додано властивість onClose
  car: Advert;
}

const CarDetailsModal: React.FC<Props> = ({ isOpen, onClose, car }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <img src={car.img} alt={`${car.make} ${car.model}`} />
        <div className={styles.details}>
          <h2>{`${car.make} ${car.model}`}</h2>
          <p>Year: {car.year}</p>
          <p>Rental Price: ${car.rentalPrice}/hour</p>
          <p>Description: {car.description}</p>
          <p>Fuel Consumption: {car.fuelConsumption}L/100km</p>
          <p>Engine Size: {car.engineSize}</p>
          <p>Accessories: {car.accessories.join(', ')}</p>
          <p>Functionalities: {car.functionalities.join(', ')}</p>
          <p>Rental Company: {car.rentalCompany}</p>
          <p>Address: {car.address}</p>
          <p>Rental Conditions: {car.rentalConditions}</p>
          <p>Mileage: {car.mileage}</p>
        </div>
      </div>
    </Modal>
  );
};

export default CarDetailsModal;
