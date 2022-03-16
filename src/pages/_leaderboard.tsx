import styles from '../styles/pages/Leaderboard.module.css'

export function Leaderboard(){
  return(
    <div className={styles.leaderboardContainer}>
      <h1>Leaderboard</h1>
      <div>
        <ul className={styles.leaderboardGenres}>
          <li>Posição</li>
          <li>Usuário</li>
          <li>Desafio</li>
          <li>Experiência</li>
        </ul>


        <ul className={styles.leaderboardList}>
          <li><b>1</b></li>
          <li className={styles.leaderboardUser}>
          <img src="https://github.com/igor-ponticelli.png" alt="" />
            <span>Igor Patrick Ponticelli</span>
          </li>
          <li><b>100</b> completados</li>
          <li><b>1320</b>  xp</li>
        </ul>
        <ul className={styles.leaderboardList}>
          <li><b>2</b></li>
          <li className={styles.leaderboardUser}>
          <img src="https://github.com/danielaraldi.png" alt="" />
            <span>Daniels Araldi</span>
          </li>
          <li><b>70</b> completados</li>
          <li><b>1220</b>  xp</li>
        </ul>
        <ul className={styles.leaderboardList}>
          <li><b>3</b></li>
          <li className={styles.leaderboardUser}>
          <img src="https://github.com/fortunatoo.png" alt="" />
            <span>Matheus Fortunato</span>
          </li>
          <li><b>46</b> completados</li>
          <li><b>1120</b>  xp</li>
        </ul>
        <ul className={styles.leaderboardList}>
          <li><b>4</b></li>
          <li className={styles.leaderboardUser}>
            <img src="https://github.com/tarcnux.png" alt="" />
            <span>Robson da Silva</span>
          </li>
          <li><b>12</b> completados</li>
          <li><b>120</b>  xp</li>
        </ul>
      </div>
    </div>
  );
}