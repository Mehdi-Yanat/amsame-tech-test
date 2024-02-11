"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/card.module.css";
import IdBox from "./IdBox";
import { RootState } from "@/lib/store";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addIds, initialStateIds } from "@/lib/features/Ids/idSlice";

interface Ids {
  ids: string[];
}

function Card() {
  const [inputValue, setInputValue] = useState("");
  const ids = useAppSelector((state: RootState) => state.idsArray.ids);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const init = () => {
      if (typeof window === "undefined") {
        return undefined; // Skip localStorage handling during SSR
      }
      try {
        const serializedState = localStorage.getItem("ids");
        if (serializedState === null) {
          return undefined;
        }
        const data = JSON.parse(serializedState) as Ids;

        dispatch(initialStateIds(data));
      } catch (error) {
        console.error("Error loading state from local storage:", error);
        return undefined;
      }
    };
    init();
  }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const idsArray = inputValue
      .split("\n") // Split by newlines
      .map((id) => id.trim()) // Trim each ID
      .filter((id) => id !== "") // Remove empty strings
      .map((id) => id.replace(/[,\s]/g, "")) // Remove commas and spaces
      .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates
    dispatch(addIds(idsArray)); // Dispatch action to add IDs to the store
  };

  return (
    <form onSubmit={handleSubmit} className={styles.card}>
      <div>
        {ids && ids.length ? (
          ids.map((id) => <IdBox id={id} key={id} />)
        ) : (
          <p> No Ids Found!</p>
        )}
      </div>
      <div>
        <textarea
          placeholder="Please put your IDs"
          value={inputValue}
          onChange={handleChange}
        />
        <button>submit</button>
      </div>
    </form>
  );
}

export default Card;
