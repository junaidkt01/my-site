import styles from './Button.module.scss';

export default function Button({ label }: { label: string }) {
  return <button className={styles.button}>{label}</button>;
}

export function PrimaryButton({ label }: { label: string }) {
  return <button className={styles.primary_button}>{label}</button>;
}
