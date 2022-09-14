import React from 'react'

import styles from "./MypageItem.module.css"

const MypageItem = ({id, value, show}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.list}>
        <input type="checkbox"></input>
          <h5 className={styles.name}>{value.title}</h5>
          <h5 className={styles.start}>{value.start}</h5>
          <h5 className={styles.end}>{value.end}</h5>
          <h5>{show}</h5>
        </div>
      </div>
    </div>
  )
}

export default MypageItem