import styles from '../styles/components/SideBar.module.css'

export function SideBar(){
  return(
    <div className={styles.sideBar}>
      <div className={styles.sideBarLogo}>
        <img src="/icons/logo.svg" alt="" />
      </div>
      <div className={styles.sideBarIcons}>
        <a href=""><img src="/icons/home.svg" alt="" /></a>
        <a href=""><img src="/icons/award.svg" alt="" /></a>
      </div>
    </div>
  );
}