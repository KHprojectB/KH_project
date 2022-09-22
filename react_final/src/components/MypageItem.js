import React from 'react'

import styles from "./MypageItem.module.css"

const MypageItem = ({bookId, mbId, rtEndTime, rtWh}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.list}>
        <input type="checkbox"></input>
          <h5 className={styles.name}>{bookId}</h5>
          <h5 className={styles.start}>{mbId}</h5>
          <h5 className={styles.end}>{rtEndTime}</h5>
          <h5>{rtWh}</h5>
        </div>
      </div>
    </div>
  )
}

export default MypageItem