import React, { Fragment, useState } from "react";

import styles from "./Mypage.module.css";
import { BsBarChartFill } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";
import dummyList from "../dummyList";
import Expenses from "./Chart/Expenses";

const Mypage = () => {

  const [bannap, setBannap] = useState(false);
  if (bannap) {
    return "";
  }
  const bannapHandler = () => {
    setBannap(true);
  }

  return (
    <div className={styles.header}>
      <h1>Rental status</h1>
      <Expenses></Expenses>
      {/* <h1>Rental status</h1>
      <div className={styles.container}>
        <div className={styles.chart}>
          <span className={styles.icon}>
            <BsBarChartFill></BsBarChartFill>
          </span>
          <div className={styles.info}>
            <div className={styles.left}>
              <h3>대여 기간</h3>
              <h1>~2022.08</h1>
            </div>
            <div className={styles.progress1}>
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className={styles.num}>
                <p>90%</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chart}>
          <span className={styles.icon}>
            <FaChartPie></FaChartPie>
          </span>
          <div className={styles.info}>
            <div className={styles.left}>
              <h3>남은 기간</h3>
              <h1>12일</h1>
            </div>
            <div className={styles.progress2}>
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className={styles.num}>
                <p>60%</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chart}>
          <span className={styles.icon}>
            <FaChartPie></FaChartPie>
          </span>
          <div className={styles.info}>
            <div className={styles.left}>
              <h3>대출 수량</h3>
              <h1>4권</h1>
            </div>
            <div className={styles.progress3}>
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className={styles.num}>
                <p>40%</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.list}>
        <h2>Recent Books</h2>\
        <div className={styles.list2}>
          <div className={styles.center}>
            <table>
              <thead>
                <tr>
                  <th>ok?</th>
                  <th>Title</th>
                  <th>ID</th>
                  <th>Auth</th>
                  <th>Date</th>
                  <th>End</th>
                  <th>dummy</th>
                </tr>
              </thead>
              <tbody>
                {dummyList.map((item) => {
                  return (
                    <tr>
                      <td>
                        <label><input type="checkbox"></input></label>
                      </td>
                      <td>
                        {item.title}
                      </td>
                      <td>{item.ID}</td>
                      <td>{item.auth}</td>
                      <td>{item.Date}</td>
                      <td>{item.end}</td>
                      <td>dummy</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* <Expenses></Expenses> */}
        </div>
        <div className={styles["btn-container"]}>
              <button className={styles.btn}>대여 연장</button>
              <button className={styles.btn}>반납 신청</button>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
