import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function LifeCycle() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Log in the component mount" + counter);

    return () => {
      console.log("Log in the component unMount" + counter);
    };
  }, [counter]);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  console.log("every render");

  return (
    <div>
      <Button onClick={increment}>+</Button>
      <Typography>{counter}</Typography>
    </div>
  );
}
