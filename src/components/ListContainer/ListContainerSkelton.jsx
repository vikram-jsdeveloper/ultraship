import styles from "./ListContainerSkelton.module.scss";

function ListContainerSkelton() {
  return (
    <div className={styles.containerSkeleton}>
      <div className={styles.headingSkeleton}></div>
      <div className={styles.seachSkeleton}></div>
      <ul className={styles.listSkeleton}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default ListContainerSkelton;
