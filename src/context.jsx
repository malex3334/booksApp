import { gapi } from "gapi-script";
import React, { useState, useEffect, useContext } from "react";

const url = "https://www.googleapis.com/books/v1/volumes?q=";
const apiKey = "AIzaSyAJHG4L-BIzTSK16ng9k0hrqqRE5zCFlQY";
const clientId =
  "936567552576-ounaih4ptgsqpclg0tf8au8ibai59qhd.apps.googleusercontent.com";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState();
  const [library, setLibrary] = useState([]);

  // const { data, error, loadingl } = useFetch("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  const handleAddToLib = (e) => {
    setLibrary((prev) => [...prev, e]);
  };

  const handleRemoveFromLib = (e) => {
    const newLib = library.filter((element) => element.id !== e.id);
    setLibrary(newLib);
  };

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}+${searchValue}`);
      const data = await response.json();

      const checkLib = await data.items.map((item) => {
        const filtr = library.find((element) => element.id === item.id);
        if (filtr) {
          return { ...item, library: "true" };
        } else return { ...item, library: "false" };
      });

      setData(checkLib);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBooks();
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
