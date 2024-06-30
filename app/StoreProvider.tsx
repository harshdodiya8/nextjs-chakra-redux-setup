"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { createStore, AppStore } from "../lib/store/store";
import { initializeCount } from "@/lib/store/features/counter/counterExampleSlice";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = createStore();

    // to add any initial data
    storeRef.current.dispatch(initializeCount())
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
