import React, { useState, useRef, useEffect } from "react";
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
    color: black;
  }
  & li {
    margin: 0.1rem;
    display: flex;
    box-sizing: border-box;
    width: calc(16.7rem / 7);
    height: calc(10.1rem / 6);
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
  & .clickedDay {
    background-color: rgb(83, 153, 233);
  }
`;
//change the color of the previous and next days
const date = new Date();
date.setDate(1);
const Calendar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [iter, setIter] = useState(null);
  const [iterReserve, setIterReserve] = useState([]);
  const [render, setRender] = useState(date);
  const [today, setToday] = useState(new Date().getDate());
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
  //refs
  const refs = useRef([]);
  refs.current = [];
  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const clickedHandler = (i) => {
    setIsClicked(!isClicked);
    setIter(i);
  };
  useEffect(() => {
    console.log(iterReserve);
    if (iterReserve.length > 9) {
      refs.current[iter].style.color = "black";
      refs.current[iter].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      refs.current[iter].style.borderRadius = "0.2rem";
      for (const el of iterReserve) {
        if (el > 0) {
          // refs.current[el].style.color = "black";
          // refs.current[el].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
          // refs.current[el].style.borderRadius = "0.2rem";
        }
      }
      alert("선택 가능한 날짜는 최대 10 일입니다.");
    }
    if (iter === null) {
      return;
    } else if (!iterReserve.includes(iter)) {
      setIterReserve([...iterReserve, iter]);
      refs.current[iter].style.color = "#FFFFFF";
      refs.current[iter].style.backgroundColor = "#FF5A60";
      refs.current[iter].style.borderRadius = "0.2rem";
    } else if (iterReserve.includes(iter)) {
      setIterReserve(iterReserve.filter((num) => num !== iter));
      refs.current[iter].style.color = "black";
      refs.current[iter].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      refs.current[iter].style.borderRadius = "0.2rem";
    }
    // refs.current[iter].style.color = "red";
  }, [isClicked]);
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
          <li key={i} className="prevDays">
            <div>{prevLastDate - prevLastDay + i + 1}</div>
          </li>
        ))}
        {[...Array(lastDate)].map((v, i) => (
          <li
            key={i}
            ref={addToRefs}
            onClick={() => clickedHandler(i)}
            className={i + 1 === today ? "today" : "anotherDay"}>
            {i + 1}
          </li>
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
