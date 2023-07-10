import { Box } from "@mui/material";
import React, { createContext, useContext, useState } from "react";

//שלבים של יצירת קונטקס
//create context
const userDataContext = createContext();

//create provider
//  הפרוביידר לא כמו כל קומפוננטה היא לא מחזירה דיב אלא מחזירה קונטקס נקודה פרוביידר והברוביידר מקבל צ'ילדרן
export default function UserDataProvider({ children }) {
  const [showBox, setShowBox] = useState(false);
  const toggleShow = () => {
    setShowBox((prev) => !prev);
  };

  return (
    <>
      {showBox && (
        <Box sx={{ backgroundColor: "red", width: 50, height: 50 }}></Box>
      )}
      <userDataContext.Provider value={toggleShow}>
        {children}
      </userDataContext.Provider>
      ;
    </>
  );
}

//create hook to use the context and handle error
export const useUserData = () => {
  const context = useContext(userDataContext);
  if (!context)
    throw new Error("useUserData must be used within a ContextProvider");
  return context;
};
