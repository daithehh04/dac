"use client"
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataBanner, setDataBanner] = useState('');
  return (
    <DataContext.Provider value={{ dataBanner, setDataBanner }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataBanner = () => {
  return useContext(DataContext);
};
