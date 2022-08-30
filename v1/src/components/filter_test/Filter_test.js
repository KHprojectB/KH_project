import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {BsCartPlusFill} from "react-icons/bs"
import {FiLogIn} from "react-icons/fi"
import {AiTwotoneSetting} from "react-icons/ai"
import {SiBookstack} from "react-icons/si"
import {FaUserAlt} from "react-icons/fa"
import { useFilterContext } from "../../context/filter_context";

import styles from "./Filter_test.module.css";

const Filter_test = () => {

  const {filtered_products, grid_view, setGridView, setListView} = useFilterContext();

  return (
    <div className={styles.nav}>
      <ul className={styles.navlist}>
        <li>
          <button type="button" className={styles["nav-toggle"]}>
            <span className={styles.text1}>Filter</span>
          </button>
        </li>
        <li>
          <button to="/cart" className={styles["nav-toggle"]}>
            <span className={styles.text}>Categories</span>
          </button>
        </li>
        <li>
          <button className={styles["nav-toggle"]} onClick={setGridView}>
            <span className={styles.text}>GridView</span>
          </button>
        </li>
        <li>
          <button className={styles["nav-toggle"]} onClick={setListView}>
            <span className={styles.text}>ListView</span>
          </button>
        </li>
        <li>
          <button className={styles["nav-toggle"]}>
            <span className={styles.text}>Name a-z</span>
          </button>
        </li>
        <li>
          <button className={styles["nav-toggle"]}>
            <span className={styles.text}>Name z-a</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filter_test;
