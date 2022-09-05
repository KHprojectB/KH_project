import React, { Fragment, useState } from "react";

import styles from "./Mypage.module.css";
import { BsBarChartFill } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";
import dummyList from "../dummyList";
import Expenses from "./Chart/Expenses";

const dummyData = [
  { id: 0, value: { title: "자바의 정석", start: "2022.06", end: "2022.09", state: "반납" } },
  { id: 1, value: { title: "이펙티브 자바", start: "2022.06", end: "2022.09", state: "반납" } },
  { id: 2, value: { title: "DoIt 오라클", start: "2022.06", end: "2022.09", state: "미반납" } },
  { id: 3, value: { title: "객체지향의 사실과 오해", start: "2022.06", end: "2022.09", state: "반납" } },
  { id: 4, value: { title: "모던 자바 인 액션", start: "2022.06", end: "2022.09", state: "미반납" } },
];

const Mypage = () => {

  const [show, setShow] = useState("미반납")
  const [bannap, setBannap] = useState(false);
  

  return (
    <div className={styles.header}>
      <div className={styles.state}>
        <h1>책 대여 현황</h1>
        <Expenses></Expenses>
      </div>
      <div className={styles.table}>
        <table class={styles["cart-table"]}>
          <thead>
            <tr>
              <th>#</th>
              <th>제목</th>
              <th>대여일</th>
              <th>반납예정일</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item) => {
              return (
                <tr>
                  <td>
                    <button>반납하기</button>
                  </td>
                  <td>{item.value.title}</td>
                  <td>{item.value.start}</td>
                  <td>{item.value.end}</td>
                  <td>{show}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles["btn-container"]}>
        <button className={styles.btn}>대여 연장</button>
        <button className={styles.btn}>
          반납 신청
        </button>
      </div>
    </div>
  );
};

export default Mypage;
