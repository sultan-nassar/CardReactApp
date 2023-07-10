import { Alert, Snackbar } from "@mui/material";
import { createContext, useCallback, useContext, useState } from "react";

const SnackContext = createContext(null);

export default function SnackbarProvider({ children }) {
  const [SnackOpen, setSnackOpen] = useState(false);
  const [SnackColor, setColor] = useState("success");
  const [SnackVarient, setVarient] = useState("filled");
  const [Snackmessage, setMessage] = useState("in snackbar");

  const setSnack = useCallback((color, message, varient) => {
    setSnackOpen(true);
    setColor(color);
    setVarient(varient);
    setMessage(message);
  }, []);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={SnackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen((prev) => !prev)}
      >
        <Alert severity={SnackColor} variant={SnackVarient}>
          {Snackmessage}
        </Alert>
      </Snackbar>
      <SnackContext.Provider value={setSnack}>{children}</SnackContext.Provider>
    </>
  );
}

export const useSnack = () => {
  const context = useContext(SnackContext);
  if (!context) throw new Error("useTheme must be used within a NameProvider");
  return context;
};
