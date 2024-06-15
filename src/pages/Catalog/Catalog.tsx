import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAdverts, Advert } from "../../redux/slices/advertsSlice";
import { RootState } from "../../redux/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { Action } from "@reduxjs/toolkit";

import CarList from "../../components/CarList/CarList";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import Loader from "../../components/Loader/Loader";
import styles from "./Catalog.module.css";

const CatalogPage: React.FC = () => {
  const dispatch =
    useDispatch<ThunkDispatch<RootState, null, Action<string>>>();
  const [filteredAdverts, setFilteredAdverts] = useState<Advert[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(fetchAdverts())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  return (
    <div>
      <h2 className={styles.titleCatalog}>Catalog Page</h2>
      <SearchFilter onFilter={setFilteredAdverts} />
      {loading ? (
        <Loader />
      ) : (
        <CarList filteredAdverts={filteredAdverts} pageSize={12} />
      )}
    </div>
  );
};

export default CatalogPage;
