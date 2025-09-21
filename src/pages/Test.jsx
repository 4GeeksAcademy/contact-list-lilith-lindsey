import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Test = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="p-4 text-center">
      <h2>Test Page</h2>
      <p>
        First Name: <strong>{store.fName || "Not set"}</strong>
      </p>
      <p>
        Last Name: <strong>{store.lName || "Not set"}</strong>
      </p>
    </div>
  );
};