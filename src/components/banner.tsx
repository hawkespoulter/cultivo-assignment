import { useState } from 'react'
import { ContactFormDialog } from './ContactFormDialog'

import Image, { StaticImageData } from 'next/image'
import styles from './banner.module.css'

interface BannerProps {
  bgImage: StaticImageData
  btnName: string
  description: string
  icon: StaticImageData
  list: string[]
  title: string
  titleDescription: string
}

export const Banner: React.FC<BannerProps> = ({
  bgImage,
  btnName,
  description,
  icon,
  list,
  title,
  titleDescription,
}) => {
  const [open, setOpen] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  const handleFormSubmitted = () => {
    setMessageSent(true)
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <Image src={icon} alt='banner icon' />
          <div>{titleDescription}</div>
          <div className={styles.title}>{title}</div>
        </div>
        <Image
          className={styles.background}
          src={bgImage}
          fill
          alt='banner background'
        />
      </div>
      <div className={styles.info}>
        {messageSent ? (
          <div>
            We received your message. Please feel free to get in touch again if
            you would like to include any further details or ask any other
            questions. We are eager to assist you.
          </div>
        ) : (
          <div>
            <p>{description}</p>
            <ul className={styles.list}>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div
        className={styles.button}
        onClick={() => {
          setOpen(true)
        }}
        style={{ width: messageSent ? '538px' : '248px' }}
      >
        {messageSent ? 'Send Another Message' : btnName}
      </div>
      <ContactFormDialog
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        onFormSubmitted={handleFormSubmitted}
      />
    </main>
  )
}
