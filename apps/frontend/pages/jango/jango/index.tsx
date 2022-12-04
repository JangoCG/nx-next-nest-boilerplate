import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface JangoProps {}

export function Jango(props: JangoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Jango!</h1>
    </div>
  );
}

export default Jango;
