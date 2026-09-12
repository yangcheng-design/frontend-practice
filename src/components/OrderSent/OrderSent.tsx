import styles from './OrderSent.module.css';

export interface OrderSentProps {
  className?: string;
}

export function OrderSent({ className }: OrderSentProps) {
  // Step 5: completed state + replay via key. JS only toggles classes / remounts.
  // const [completed, setCompleted] = useState(false);

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(' ')}
      role="button"
      tabIndex={0}
      aria-label="Replay order animation"
    >
      <div className={styles.circleWrap}>
        <svg className={styles.mainSvg} viewBox="0 0 120 120">
          <circle className={styles.track} cx="60" cy="60" r="48" />
          <circle className={styles.fill} cx="60" cy="60" r="46.25" />
          <circle className={styles.complete} cx="60" cy="60" r="48" />
          <circle className={styles.spinner} cx="60" cy="60" r="48" />
        </svg>
        <svg className={styles.checkmark} viewBox="0 0 50 50">
          <path className={styles.checkmarkPath} d="M12 26 L22 36 L38 16" />
        </svg>
        <div className={styles.glow} />
        <div className={styles.ripple} />
        <div className={styles.ripple2} />
      </div>
      <p className={styles.status}>Submitting order</p>
    </div>
  );
}
