import React, { useState, useEffect, useContext } from "react";

const url = "https://www.googleapis.com/books/v1/volumes?q=";
const maxResults = "15";

const getLibrary = () => {
  if (localStorage.getItem("library") !== "undefined") {
    const library = localStorage.getItem("library");
    return JSON.parse(library);
  } else return [];
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState();
  const [library, setLibrary] = useState(getLibrary());
  const [resultsQ, setResultsQ] = useState("15");

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

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${url}+${searchValue}&maxResults=${maxResults}`
      );
      const data = await response.json();
      // filter if in library
      const checkLib = await data.items.map((item) => {
        const filtr = library?.find((element) => element.id === item.id);
        if (filtr) {
          return { ...item, library: true };
        } else return { ...item, library: false };
      });
      setData(checkLib);

      // setData(data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
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
        setLoading,
        userId,
        setUserId,
        library,
        setLibrary,
        handleAddToLib,
        handleRemoveFromLib,
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
