import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function LifeCycle() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const storedCounter = localStorage.getItem("counter");
    if (storedCounter) {
      setCounter(parseInt(storedCounter));
    }
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          setCounter(counter + 1);
          localStorage.setItem("counter", counter + 1);
        }}
      >
        +
      </Button>
      <Typography>{counter}</Typography>
    </div>
  );
}
