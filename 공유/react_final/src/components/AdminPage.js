import React, { Fragment } from "react";

import MypageTop from "./Admin/MypageTop";
import MypageSide from "./Admin/MypageSide";
import Chart from "./Admin/Chart";
import "./AdminPage.css"
import {FaUsers} from "react-icons/fa"
import {BsBookFill} from "react-icons/bs"
import {ImBooks} from "react-icons/im"
import {HiDocumentDuplicate} from "react-icons/hi"

const AdminPage = () => {
  return (
    <div className="admin-page">
      {/* <h1 classNameName='admin'>Admin Page</h1>
      <MypageTop></MypageTop>
      <MypageSide></MypageSide>
      <Chart></Chart> */}
      <h3 className="i-name">Dashboard</h3>

      <div className="all">
        <div className="values">
          <div className="val-box">
            <i className="fas fa-users a">
              <FaUsers></FaUsers>
            </i>
            <div>
              <h3>2,623</h3>
              <span>New Users</span>
            </div>
          </div>
        </div>
        <div className="values">
          <div className="val-box">
            <i className="fas fa-book-open b">
              <BsBookFill></BsBookFill>
            </i>
            <div>
              <h3>283</h3>
              <span>New Rental</span>
            </div>
          </div>
        </div>
        <div className="values">
          <div className="val-box">
            <i className="fas fa-layer-group c">
              <ImBooks></ImBooks>
            </i>
            <div>
              <h3>1,934</h3>
              <span>Total Rented</span>
            </div>
          </div>
        </div>
        <div className="values">
          <div className="val-box">
            <i className="fas fa-book d">
              <HiDocumentDuplicate></HiDocumentDuplicate>
            </i>
            <div>
              <h3>100</h3>
              <span>Books</span>
            </div>
          </div>
        </div>
      </div>

      <div className="board">
        <table width="100%">
          <thead>
            <tr>
              <td>도서명</td>
              <td>저자</td>
              <td>대여일</td>
              <td>대여자</td>
              <td>반납일</td>
              <td>반납여부</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="book">
                <h5>하얼빈</h5>
              </td>
              <td className="author">
                <h5>김훈</h5>
              </td>
              <td className="rental-date">
                <h5>2022-09-05</h5>
              </td>
              <td className="rental-user">
                <h5>이은정</h5>
              </td>
              <td className="return-date">
                <h5>2022-10-05</h5>
              </td>
              <td className="return-icon"></td>
            </tr>
            <tr>
              <td className="book">
                <h5>불편한 편의점 2</h5>
              </td>
              <td className="author">
                <h5>김호연</h5>
              </td>
              <td className="rental-date">
                <h5>2022-09-05</h5>
              </td>
              <td className="rental-user">
                <h5>김영훈</h5>
              </td>
              <td className="return-date">
                <h5>2022-10-05</h5>
              </td>
              <td className="return-icon"></td>
            </tr>
            <tr>
              <td className="book">
                <h5>역행자</h5>
              </td>
              <td className="author">
                <h5>자청</h5>
              </td>
              <td className="rental-date">
                <h5>2022-09-05</h5>
              </td>
              <td className="rental-user">
                <h5>이은정</h5>
              </td>
              <td className="return-date">
                <h5>2022-10-05</h5>
              </td>
              <td className="return-icon"></td>
            </tr>
            <tr>
              <td className="book">
                <h5>설민석의 한국사 대모험 22</h5>
              </td>
              <td className="author">
                <h5>설민석, 스토리박스</h5>
              </td>
              <td className="rental-date">
                <h5>2022-09-05</h5>
              </td>
              <td className="rental-user">
                <h5>이은정</h5>
              </td>
              <td className="return-date">
                <h5>2022-10-05</h5>
              </td>
              <td className="return-icon"></td>
            </tr>
            <tr>
              <td className="book">
                <h5>라오어의 미국주식 밸류 리밸런싱</h5>
              </td>
              <td className="author">
                <h5>라오어</h5>
              </td>
              <td className="rental-date">
                <h5>2022-09-05</h5>
              </td>
              <td className="rental-user">
                <h5>이은정</h5>
              </td>
              <td className="return-date">
                <h5>2022-10-05</h5>
              </td>
              <td className="return-icon"></td>
            </tr>
            <tr>
              <td className="book">
                <h5>하얼빈</h5>
              </td>
              <td className="author">
                <h5>김훈</h5>
              </td>
              <td className="rental-date">
                <h5>2022-09-05</h5>
              </td>
              <td className="rental-user">
                <h5>이은정</h5>
              </td>
              <td className="return-date">
                <h5>2022-10-05</h5>
              </td>
              <td className="return-icon"></td>
            </tr>
            <tr>
              <td className="book">
                <h5>하얼빈</h5>
              </td>
              <td className="author">
                <h5>김훈</h5>
              </td>
              <td className="rental-date">
                <h5>2022-09-05</h5>
              </td>
              <td className="rental-user">
                <h5>이은정</h5>
              </td>
              <td className="return-date">
                <h5>2022-10-05</h5>
              </td>
              <td className="return-icon"></td>
            </tr>
            <tr>
              <td className="book">
                <h5>하얼빈</h5>
              </td>
              <td className="author">
                <h5>김훈</h5>
              </td>
              <td className="rental-date">
                <h5>2022-09-05</h5>
              </td>
              <td className="rental-user">
                <h5>이은정</h5>
              </td>
              <td className="return-date">
                <h5>2022-10-05</h5>
              </td>
              <td className="return-icon"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
