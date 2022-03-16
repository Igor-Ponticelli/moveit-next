import Head from 'next/head'
import { Room } from './_room';
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownContextProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css';
import { SideBar } from '../components/SideBar';
import { Leaderboard } from './_leaderboard';

export default function Home() {
  return (
  <div className={styles.content}>
    <div>
      <SideBar />
    </div>
    <div className={styles.container}>

        <Head>
          <title>Ínicio | move.it</title>
        </Head>


        <ExperienceBar />

        <CountdownContextProvider>
          <section>
            <div>
              <Profile/>
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownContextProvider>
      </div>
    </div>
  )
}
