import React, { useState } from "react";

import "./Test.css";
import Modal from "../modal/Modal";

const Test = (props) => {
  const [state, setState] = useState(false);

  const openHandler = () => {
    setState(true);
  };
  const closeHandler = () => {
    setState(false);
  };

  return (
    <Modal onClose={props.onClose}>
      <div class="modal-container">
        <div class="modal">
          <div class="modal-header">
            <h1 class="modal-title">Error!</h1>
          </div>
          <div class="modal-center">
            <h4>로그인 오류가 발생하였습니다.</h4>
            <p>아이디와 비밀번호를 확인해주세요.</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Test;
