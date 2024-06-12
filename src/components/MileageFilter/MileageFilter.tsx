// import React, { useState } from 'react';
// import styles from './MileageFilter.module.css';

// interface MileageFilterProps {
//   onFilterChange: (minMileage: number, maxMileage: number) => void;
// }

// const MileageFilter: React.FC<MileageFilterProps> = ({ onFilterChange }) => {
//   const [minMileage, setMinMileage] = useState<number>(0);
//   const [maxMileage, setMaxMileage] = useState<number>(0);

//   const handleFilterChange = () => {
//     onFilterChange(minMileage, maxMileage);
//   };

//   return (
//     <div className={styles.mileageFilter}>
//       <h3>Сar mileage / km</h3>
//       <div className={styles.inputGroup}>
//         <input
//           type="number"
//           id="minMileage"
//           placeholder="from"
//           value={minMileage}
//           onChange={(e) => setMinMileage(Math.max(0, Number(e.target.value)))}
//         />
//       </div>
//       <div className={styles.inputGroup}>
//         <input
//           type="number"
//           id="maxMileage"
//           placeholder="to"
//           value={maxMileage}
//           onChange={(e) => setMaxMileage(Math.max(0, Number(e.target.value)))}
//         />
//       </div>
//       <button className={styles.filterButton} onClick={handleFilterChange}>Apply filter</button>
//     </div>
//   );
// };

// export default MileageFilter;
