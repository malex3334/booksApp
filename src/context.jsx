import React, { useState, useEffect, useContext } from "react";
import useFetch from "./hooks/useFetch";

const getLibrary = () => {
  if (
    localStorage.getItem("library") &&
    localStorage.getItem("library") !== "undefined"
  ) {
    const library = localStorage.getItem("library");
    return JSON.parse(library);
  } else return [];
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [userId, setUserId] = useState();
  const [library, setLibrary] = useState(getLibrary());
  const [slice, setSlice] = useState(10);
  const { fetchBooks, data, setData, loading } = useFetch(
    searchValue,
    library,
    setSlice
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  const handleAddToLib = (e) => {
    const newPosition = { ...e, library: true };
    setLibrary((prev) => [...prev, newPosition]);
  };

  const handleRemoveFromLib = (e) => {
    const newLib = library.filter((element) => element.id !== e.id);
    setLibrary(newLib);
  };

  useEffect(() => {
    // filter if in library
    const checkLib = data?.map((item) => {
      const filtr = library.find((element) => element.id === item.id);
      if (filtr) {
        return { ...item, library: true };
      } else return { ...item, library: false };
    });
    setData(checkLib);
  }, [library]);

  useEffect(() => {
    localStorage.setItem("library", JSON.stringify(library));
  }, [library]);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        searchValue,
        setSearchValue,
        handleSubmit,
        loading,
        userId,
        setUserId,
        library,
        setLibrary,
        handleAddToLib,
        handleRemoveFromLib,
        fetchBooks,
        slice,
        setSlice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
