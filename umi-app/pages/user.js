import router from 'umi/router';
import styles from './user.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>哈哈啊哈哈哈</h1>
      <button onClick={() => { router.goBack(); }}>go back</button>
    </div>
  );
}
