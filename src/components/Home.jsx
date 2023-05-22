import styles from "@/styles/Index.module.css";

const Home = () => {
  return (
    <section id="home" className={styles.section}>
      <div className={[styles.box, styles.fadeIn].join(" ")}>
        <div className={styles.text}>
          <h1>Oliver Brown</h1>
          <p>Web Developer</p>
        </div>

        <img className={styles.image} src="/maple.jpg" alt="profile"></img>
      </div>
    </section>
  );
};

export default Home;
