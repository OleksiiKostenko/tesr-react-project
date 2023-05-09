import React, { createContext, useContext, useState } from "react";

export const ContextValue = createContext();

export const useInputContex = () => {
  return useContext(ContextValue);
};

export const Context = ({ children }) => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [arrayLangth, setArrayLangth] = useState([]);

  return (
    <ContextValue.Provider
      value={{
        query: query,
        setQuery: setQuery,
        users: users,
        setUsers: setUsers,
        page: page,
        setPage: setPage,
        arrayLangth: arrayLangth,
        setArrayLangth: setArrayLangth,
      }}
    >
      {children}
    </ContextValue.Provider>
  );
};
