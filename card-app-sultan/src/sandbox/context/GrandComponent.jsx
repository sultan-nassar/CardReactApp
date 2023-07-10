import React from "react";
import FatherComponent from "./FatherComponent";
import DataProvider from "./DataProvider";

export default function GrandComponent() {
  return (
    <div>
      <DataProvider>
        <FatherComponent />
      </DataProvider>
    </div>
  );
}
