import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useSelector } from "react-redux";
import { Advert, selectAllAdverts } from "../../redux/slices/advertsSlice";
import { RootState } from "../../redux/store";
import styles from "./SearchFilter.module.css";
import makes from "../../data/makes.json";

interface Props {
  onFilter: (filteredAdverts: Advert[]) => void;
}

const SearchFilter: React.FC<Props> = ({ onFilter }) => {
  const [value, setValue] = useState<string>("");
  const allAdverts = useSelector((state: RootState) => selectAllAdverts(state));

  useEffect(() => {
    let filteredAdverts = allAdverts;

    if (value !== "") {
      filteredAdverts = filteredAdverts.filter(
        (advert) => advert.make === value
      );
    }

    onFilter(filteredAdverts);
  }, [value, allAdverts, onFilter]);

  const options = [
    { value: "", label: "Choose a car" },
    ...makes.map((make) => ({ value: make, label: make })),
  ];
  

  return (
    <div className={styles.filters}>
      <form className={styles.form}>
        <Select
          options={options}
          placeholder="Choose a car"
          value={options.find((option) => option.value === value)}
          onChange={(selectedOption: any) =>
            setValue(selectedOption ? selectedOption.value : "")
          }
          className={styles.select}
        />
      </form>
    </div>
  );
};

export default SearchFilter;
