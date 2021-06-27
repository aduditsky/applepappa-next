import { createContext, useState, useEffect } from 'react';

export const SiteContext = createContext({
  modalInfo: false,
  categories: {},
  counter: 0,
});

const SiteProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [modalInfo, setModalInfo] = useState(false);
  const [categoriesList, setCategoriesList] = useState({});

  return (
    <SiteContext.Provider
      value={{
        modalInfo,
        categoriesList,
        counter,
        setCounter,
        setCategoriesList,
        setModalInfo,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export default SiteProvider;
