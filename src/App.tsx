import { OrderSent } from './components/OrderSent';
import styles from './App.module.css';

export function App() {
  return (
    <main className={styles.page}>
      <OrderSent />
    </main>
  );
}
