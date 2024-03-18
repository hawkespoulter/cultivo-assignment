'use client'

import { Banner } from '@/components/banner'
import bannerIcon from './images/analyze.png'
import bgImage from './images/wallpaper.png'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>

      <div className={styles.placeholder}>
        <Banner
          title='Expert Report'
          titleDescription='Next step'
          description='Please get in touch if you would like an expert report for this site. Benefits include:'
          list={[
            'Key insights from our expert team',
            'An in-depth analysis of the site',
            'Recommendations of next steps to take',
          ]}
          btnName='Get In Touch'
          icon={bannerIcon}
          bgImage={bgImage}
        />
      </div>
    </main>
  )
}
