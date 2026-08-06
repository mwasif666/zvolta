import styles from "./RouteSkeleton.module.css";

export function RouteSkeleton() {
  return (
    <div
      className={styles.skeleton}
      role="status"
      aria-label="Loading page"
      aria-live="polite"
    >
      <div className={styles.container}>
        <div className={`${styles.shimmer} ${styles.eyebrow}`} />
        <div className={`${styles.shimmer} ${styles.title}`} />
        <div className={`${styles.shimmer} ${styles.titleShort}`} />
        <div className={`${styles.shimmer} ${styles.copy}`} />
        <div className={`${styles.shimmer} ${styles.copyShort}`} />
        <div className={`${styles.shimmer} ${styles.button}`} />

        <div className={styles.cards} aria-hidden="true">
          {Array.from({ length: 3 }, (_, index) => (
            <div className={styles.card} key={index}>
              <div className={`${styles.shimmer} ${styles.cardMedia}`} />
              <div className={`${styles.shimmer} ${styles.cardTitle}`} />
              <div className={`${styles.shimmer} ${styles.cardCopy}`} />
            </div>
          ))}
        </div>
      </div>
      <span className={styles.screenReaderText}>Loading page content…</span>
    </div>
  );
}
