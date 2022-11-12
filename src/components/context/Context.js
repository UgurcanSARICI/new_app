import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  // Get Form Data
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  // Storage Data
  const [storageUserData, setStorageUserData] = useState();

  // Form update
  const [isUpdate, setIsUpdate] = useState(false);

  // User data
  const [userData, setUserData] = useState([]);

  // Func Section
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("asdasdasd");
  };

  return (
    <Context.Provider
      value={{
        setUserData,
        userData,
        setGender,
        gender,
        setPhoneNumber,
        phoneNumber,
        setUserName,
        userName,
        setIsUpdate,
        isUpdate,
        handleFormSubmit,
      }}
    >
      {children}
    </Context.Provider>
  );
};
