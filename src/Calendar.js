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
  & * {
    font-size: 1rem;
  }
`;
const Day = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
const DayStyle = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  justify-content: center;
  & li {
    width: calc(16.7rem / 7);
    margin: 0.1rem;
    padding: 0;
    text-align: center;
  }
`;
const CalendarTopStyle = styled.div`
  display: flex;
  justify-content: space-around;

  & .calendarTitle {
    width: 4rem;
    text-align: center;
  }
`;
const Days = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  width: 18.1rem;
  flex-wrap: wrap;
  font-size: 0.5em;
  height: 19.8em;
  list-style: none;

  & li:hover {
    border: 1px solid rgb(0, 138, 245);
    color: rgb(0, 138, 245);
  }
  & li {
    margin: 0.1rem;
    display: flex;
    box-sizing: border-box;
    width: calc(16.7rem / 7);
    height: calc(10.1rem / 6);
    align-items: center;
    justify-content: center;
  }
  & .prevDays {
    color: rgb(168, 176, 188);
  }
  & .today {
    color: ghostwhite;
    background-color: rgb(0, 138, 245);
    border-radius: 0.2rem;
  }
  & .nextDays {
    color: rgb(168, 176, 188);
  }
  & .clicked {
    background-color: rgb(83, 153, 233);
  }
`;
//change the color of the previous and next days
const date = new Date();
date.setDate(1);
const Calendar = () => {
  const [render, setRender] = useState(date);
  const [today, setToday] = useState(new Date().getDate());
  const [isClicked, setIsClicked] = useState(false);
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

  return (
    <CalendarStyle>
      <CalendarTopStyle>
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={() => {
            setRender(date.setMonth(date.getMonth() - 1));
          }}></FontAwesomeIcon>
        <div className="calendarTitle">
          {year}/{months[month]}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={() => {
            setRender(date.setMonth(date.getMonth() + 1));
          }}></FontAwesomeIcon>
      </CalendarTopStyle>
      <div>
        <DayStyle>
          {Day.map((v, i) => (
            <li>{v}</li>
          ))}
        </DayStyle>
      </div>

      <Days>
        {[...Array(prevLastDay === 7 ? 0 : prevLastDay)].map((v, i) => (
          <li className="prevDays">
            <div>{prevLastDate - prevLastDay + i + 1}</div>
          </li>
        ))}
        {[...Array(lastDate)].map((v, i) => (
          <div>
            <div>
              <li className={i + 1 === today ? "today" : "anotherDay"}>
                {i + 1}
              </li>
            </div>
          </div>
        ))}
        {[...Array(7 - lastDay - 1)].map((v, i) => (
          <li className="nextDays">
            <div>{i + 1}</div>
          </li>
        ))}
      </Days>
    </CalendarStyle>
  );
};

export default Calendar;
