import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import useText from "../hooks/useText";

export default function MyformTargil() {
  const { text, update, reset, cancel, print } = useText();
  return (
    <div>
      <TextField type="text" onChange={update}></TextField>

      <Button variant="contained" onClick={reset}>
        reset
      </Button>
      <Button variant="contained" onClick={cancel}>
        cancel
      </Button>
      <Button variant="contained" onClick={print}>
        submit
      </Button>
      <Typography>{text}</Typography>
    </div>
  );
}
