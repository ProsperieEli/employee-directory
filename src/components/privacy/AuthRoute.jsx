import React from "react";
import { useContext } from "react";
import { profileContext } from "../context/ProfileContext";

export function useAuth() {
  const context = useContext(profileContext);

  if (context === undefined) {
    throw new Error("Incorrect Auth");
  }
  return context;
}
