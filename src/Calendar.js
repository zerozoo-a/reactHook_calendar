import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
//1. components 외부에서 date 값을 주고 이를 지속적으로 참조하는게 가능한가? :
//2. 외부에서 date값 참조해 변경하면 변경은 되지만 화면이 render되지 않음
//3. render시키기 위해 필요없는 값 setState해보기 || useEffect로 date구독하기 사용하기
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Day = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

const date = new Date();
date.setDate(1);
const Calendar = () => {
  const [render, setRender] = useState(date);
  const lastDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const prevLastDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  return (
    <div>
      <div>{date.getMonth()}</div>
      <div>
        {/* {new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()} */}
        {lastDate}
      </div>
      <div>{prevLastDate}</div>
      <button
        onClick={() => {
          setRender(date.setMonth(date.getMonth() + 1));
        }}>
        UP
      </button>
    </div>
  );
};

export default Calendar;
