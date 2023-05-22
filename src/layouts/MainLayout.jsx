import { useState, useEffect } from "react";
import Header from "../components/Header";
import Loading from "@/components/Loading";
import styles from "@/styles/MainLayout.module.css";

const MainLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
