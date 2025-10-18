import styles from './Button.module.scss';

export default function Button({ label }: { label: string; }) {
  return <button className={styles.button}>{label}</button>;
}

export function PrimaryButton({ label, textColor }: { label: string; textColor?: string; }) {
  return <button style={{ color: textColor }} className={`${styles.primary_button} hover: bg-[red]`}>{label}</button>;
}
