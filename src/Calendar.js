import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { createGlobalStyle } from "styled-components";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
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
const CalendarStyle = styled.div`
  list-style: none;
`;
const Day = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
const DayStyle = styled.ul`
  display: flex;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  justify-content: center;
  & li {
    width: calc(15rem / 7);
  }
`;
const CalendarTopStyle = styled.div`
  margin: 0 auto;
  text-align: center;
`;
const Days = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  width: 15rem;
  font-size: 0.5em;
  height: 19em;
  outline: 1px solid red;
  list-style: none;
  & li {
    display: flex;
    width: calc(15rem / 7);
    align-items: center;
    justify-content: center;
  }
`;

const date = new Date();
date.setDate(1);
const Calendar = () => {
  const [render, setRender] = useState(date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const lastDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const prevLastDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  const prevLastDay =
    new Date(date.getFullYear(), date.getMonth(), 0).getDay() + 1;
  //0 ~ 6
  return (
    <CalendarStyle>
      <div>이 달의 마지막 날짜 / {lastDate}</div>
      <div>이전달의 마지막 날짜 / {prevLastDate}</div>
      <div>이전달의 마지막 요일{prevLastDay}</div>
      <button
        onClick={() => {
          setRender(date.setMonth(date.getMonth() + 1));
        }}>
        UP
      </button>
      <button
        onClick={() => {
          setRender(date.setMonth(date.getMonth() - 1));
        }}>
        DOWN
      </button>
      <CalendarTopStyle>
        <div>
          📆{year}/{months[month]}
        </div>
        <div>
          <DayStyle>
            {Day.map((v, i) => (
              <li>{v}</li>
            ))}
          </DayStyle>
        </div>
        <div>
          {prevLastDate}/{prevLastDay}
        </div>

        <Days>
          {[...Array(prevLastDay === 7 ? 0 : prevLastDay)].map((v, i) => (
            <li>{prevLastDate - prevLastDay + i + 1}</li>
          ))}
          {[...Array(lastDate)].map((v, i) => (
            <li>{i + 1}</li>
          ))}
          {[...Array(7 - lastDay - 1)].map((v, i) => (
            <li>{i + 1}</li>
          ))}
        </Days>
      </CalendarTopStyle>
    </CalendarStyle>
  );
};

export default Calendar;
