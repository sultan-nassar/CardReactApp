import { Typography } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import MyButton from "./MyButton";

export default function Memoization() {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCounter((prev) => prev - 1);
  }, []);

  const myLabelPlus = useMemo(
    () => ({
      data: "+",
    }),
    []
  );
  const myLabelMinus = useMemo(
    () => ({
      data: "-",
    }),
    []
  );

  const slowFunc = useMemo(() => {
    console.log("the slow function is rendred");
    for (let index = 0; index < 200000000; index++) {}
    return "hello";
  }, []);

  return (
    <div>
      <Typography>{counter}</Typography>
      <MyButton label={myLabelPlus} func={increment} />
      <MyButton label={myLabelMinus} func={decrement} />
      <Typography>{slowFunc}</Typography>
    </div>
  );
}
