import React from "react";
import styles from "../styles/card.module.css";
import Image from "next/image";
import { useAppDispatch } from "@/lib/hooks";
import { removeOne } from "@/lib/features/Ids/idSlice";

function IdBox({ id }: { id: string }) {
  const dispatch = useAppDispatch();

  const removeId = (id: string) => {
    dispatch(removeOne(id));
  };

  return (
    <div className={styles.idBox}>
      <p>{id}</p>
      <button onClick={() => removeId(id)} className={styles.closeButton}>
        <Image
          width={16}
          height={16}
          alt="close button"
          src={"/assets/close.png"}
        />
      </button>
    </div>
  );
}

export default IdBox;
