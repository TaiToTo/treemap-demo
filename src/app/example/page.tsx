"use client";

import { getText } from "@/api/weaviate";
import styles from "./page.module.css";
import { useEffect } from "react";
import { WeaviateField } from "weaviate-client";
import { useState } from "react";

export default function Main() {
  const [data, setData] = useState<WeaviateField[]>([]);
  useEffect(() => {
    getText("data").then((data) => setData(data));
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {data.map((value, i) => (
          <p key={i}>{String(value)}</p>
        ))}
      </main>
    </div>
  );
}