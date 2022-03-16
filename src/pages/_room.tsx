import styles from '../styles/pages/room.module.css';

export function Room(){
  return(
    <div className={styles.roomContainer}>
      <div className={styles.roomImageContainer}>
        <img src="/symbol.png" alt="" />
      </div>
      <div className={styles.roomAuthContainer}>
        <img src="/title.png" alt="" />
        <h2>Bem-vindo</h2>
        <div className={styles.roomGithub}>
          <img src="/icons/github.svg" alt="" />
          <p>Faça login com seu Github para começar</p>
        </div>
        <div className={styles.roomUser}>        
          <input type="email" name="username" id="username" placeholder="Digite seu username" />
          <button type="submit">
            <img src="/icons/seta.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}