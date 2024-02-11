import React from 'react'
import styles from "../styles/card.module.css"
import Image from 'next/image'

function IdBox() {
  return (
    <div className={styles.idBox} >
        <p>cbc35a59-be42-4b94-a8ce-d55d37395aeb</p>
        <button className={styles.closeButton} >
          <Image width={16} height={16} alt='close button' src={"/assets/close.png"} />
        </button>
    </div>
  )
}

export default IdBox
