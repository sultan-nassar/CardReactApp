import React from "react";
import { useData } from "./DataProvider";

export default function ChildComponent() {
  const data = useData();
  console.log(data);
  return <div>Hello</div>;
}
