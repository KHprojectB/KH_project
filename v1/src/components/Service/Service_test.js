import React, { Fragment, useState } from "react";

import styles from "./Service_test.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const dummy = [
  { title: "기본적인 책으로 기본기를 다져보세요", desc: "자바의 첫걸음 자바의 정석...", img: `${require("../../assets/book1.jpg")}` },
  { title: "현재 가장 인기있는 책을 즐겨보세요", desc: "자바하는 사람이라면 필독서", img: `${require("../../assets/book2.jpg")}` },
  { title: "새로운 책을 빠르게 즐겨보세요", desc: "인프런 1타 강사 '김영한'님의 JPA 혁신", img: `${require("../../assets/book3.jpg")}` },
];

const Service_test = () => {
  const [index, setIndex] = useState(0);

  const { title, desc, img } = dummy[index];

  const indexPlusHandler = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const indexMinusHandler = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const checkIndex = (num) => {
    if (num > dummy.length - 1) {
      return 0;
    }
    if (num < 0) {
      return dummy.length - 1;
    }
    return num;
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.center}></div>
          <div className={styles["text-center"]}>
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
          <div className={styles["img-center"]}>
            <img src={img}></img>
          </div>
        </div>
      <div className={styles["button-container"]}>
        <button className={styles["prev-btn"]} onClick={indexMinusHandler}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className={styles["next-btn"]} onClick={indexPlusHandler}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
    </Fragment>
  );
};

export default Service_test;
