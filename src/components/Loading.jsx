import styles from "@/styles/Index.module.css";

const Loading = () => {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <div className={[styles.text, styles.typingEffect].join(" ")}>
          <h1>Oliver Brown</h1>
        </div>
      </div>
    </section>
  );
};

export default Loading;
