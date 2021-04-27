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
    display: flex;
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
  const [isClicked, setIsClicked] = useState(false);
  const [iter, setIter] = useState(null);
  const [iterReserve, setIterReserve] = useState([]); //month
  const [janIterReserve, setJanIterReserve] = useState([]);
  const [febIterReserve, setFebIterReserve] = useState([]);
  const [marIterReserve, setMarIterReserve] = useState([]);
  const [aprIterReserve, setAprIterReserve] = useState([]);
  const [mayIterReserve, setMayIterReserve] = useState([]);
  const [junIterReserve, setJunIterReserve] = useState([]);
  const [julIterReserve, setJulIterReserve] = useState([]);
  const [augIterReserve, setAugIterReserve] = useState([]);
  const [sepIterReserve, setSepIterReserve] = useState([]);
  const [octIterReserve, setOctIterReserve] = useState([]);
  const [novIterReserve, setNovIterReserve] = useState([]);
  const [decIterReserve, setDecIterReserve] = useState([]);
  const [render, setRender] = useState(date);
  const [today, setToday] = useState(new Date().getDate());
  //refs
  const refs = useRef([]); //여러 refs를 지정 할 것이다.
  refs.current = []; // refs가 여러가지이면 refs.current는 refs를 담는 그릇이므로 여러가지여야 한다.
  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  }; //refs.current.push는 순서대로 ref값을 refs.current 배열에 담는다
  //refs setting

  const clickedHandler = (i) => {
    setIsClicked(!isClicked);
    setIter(i);
  };
  const selectorDraw = (selectedIterReserve, setSelectedIterReserve, mon) => {
    if (iter === null) {
      return;
    } else if (!selectedIterReserve.includes(iter) && month === mon) {
      setSelectedIterReserve([...selectedIterReserve, iter]);
      refs.current[iter].style.color = "#FFFFFF";
      refs.current[iter].style.backgroundColor = "#FF5A60";
      refs.current[iter].style.borderRadius = "0.2rem";
    } else if (selectedIterReserve.includes(iter) && month === mon) {
      setSelectedIterReserve(selectedIterReserve.filter((num) => num !== iter));
      refs.current[iter].style.color = "black";
      refs.current[iter].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      refs.current[iter].style.borderRadius = "0.2rem";
    }
  };
  const selectedCounter = (selectedIterReserve) => {
    if (selectedIterReserve.length > 10) {
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
  };
  const selectedRedraw = (selectedIterReserve, mon, chk) => {
    console.log(selectedIterReserve);
    if (month === mon) {
      selectedIterReserve.map((v, i) => {
        refs.current[v].style.color = "#FFFFFF";
        refs.current[v].style.backgroundColor = "#FF5A60";
        refs.current[v].style.borderRadius = "0.2rem";
      });
    }
  };
  useEffect(() => {
    refs.current.map((v) => {
      v.style.color = "black";
      v.style.backgroundColor = "rgba(0,0,0,0.0)";
      v.style.borderRadius = "0.2rem";
    });
  }, [month]);

  useEffect(() => {
    selectedCounter(janIterReserve);
    selectorDraw(janIterReserve, setJanIterReserve, 0);
  }, [isClicked]); //JAN draw
  useEffect(() => {
    selectedRedraw(janIterReserve, 0);
  }, [month]); //redraw when came back origin month
  useEffect(() => {
    selectedCounter(febIterReserve);
    selectorDraw(febIterReserve, setFebIterReserve, 1);
  }, [isClicked]); //JAN draw
  useEffect(() => {
    selectedRedraw(febIterReserve, 1);
  }, [month]); //redraw when came back origin month

  useEffect(() => {
    selectedCounter(marIterReserve);
    selectorDraw(marIterReserve, setMarIterReserve, 2);
  }, [isClicked]); //JAN draw
  useEffect(() => {
    selectedRedraw(marIterReserve, 2);
  }, [month]); //redraw when came back origin month

  useEffect(() => {
    selectedCounter(aprIterReserve);
    selectorDraw(aprIterReserve, setAprIterReserve, 3);
  }, [isClicked]); //APR draw selected days in calender
  useEffect(() => {
    selectedRedraw(aprIterReserve, 3, "apr");
  }, [month]); //APR redraw when came back origin month

  useEffect(() => {
    selectedCounter(mayIterReserve);
    selectorDraw(mayIterReserve, setMayIterReserve, 4);
  }, [isClicked]); //JAN draw
  useEffect(() => {
    selectedRedraw(mayIterReserve, 4);
  }, [month]); //redraw when came back origin month

  useEffect(() => {
    selectedCounter(junIterReserve);
    selectorDraw(junIterReserve, setJunIterReserve, 5);
  }, [isClicked]); //JAN draw
  useEffect(() => {
    selectedRedraw(junIterReserve, 5);
  }, [month]); //redraw when came back origin month

  useEffect(() => {
    selectedCounter(julIterReserve);
    selectorDraw(julIterReserve, setJulIterReserve, 6);
  }, [isClicked]); //JAN draw
  useEffect(() => {
    selectedRedraw(julIterReserve, 6);
  }, [month]); //redraw when came back origin month

  useEffect(() => {
    selectedCounter(augIterReserve);
    selectorDraw(augIterReserve, setAugIterReserve, 7);
  }, [isClicked]); //JAN draw
  useEffect(() => {
    selectedRedraw(augIterReserve, 7);
  }, [month]); //redraw when came back origin month

  useEffect(() => {
    selectedCounter(sepIterReserve);
    selectorDraw(sepIterReserve, setSepIterReserve, 8);
  }, [isClicked]); //JAN draw
  useEffect(() => {
    selectedRedraw(sepIterReserve, 8);
  }, [month]); //redraw when came back origin month

  useEffect(() => {
    selectedCounter(octIterReserve);
    selectorDraw(octIterReserve, setOctIterReserve, 9);
  }, [isClicked]); //JAN draw
  useEffect(() => {
    selectedRedraw(octIterReserve, 9);
  }, [month]); //redraw when came back origin month

  useEffect(() => {
    selectedCounter(novIterReserve);
    selectorDraw(novIterReserve, setNovIterReserve, 10);
  }, [isClicked]); //JAN draw
  useEffect(() => {
    selectedRedraw(novIterReserve, 10);
  }, [month]); //redraw when came back origin month

  useEffect(() => {
    selectedCounter(decIterReserve);
    selectorDraw(decIterReserve, setDecIterReserve, 11);
  }, [isClicked]); //JAN draw
  useEffect(() => {
    selectedRedraw(decIterReserve, 11);
  }, [month]); //redraw when came back origin month

  useEffect(() => {
    if (month === new Date().getMonth()) {
      // console.log("draw today");
      refs.current[today - 1].style.color = "white";
      refs.current[today - 1].style.backgroundColor = "rgb(0,138,245)";
      refs.current[today - 1].style.borderRadius = "0.2rem";
    }
  }, [month]);
  //draw today
  return (
    <CalendarStyle>
      <CalendarTopStyle>
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={() => {
            setRender(date.setMonth(date.getMonth() - 1));
          }}></FontAwesomeIcon>
        <div className="calendarTitle">
          {year} {months[month]} {today}
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
          <li key={i} ref={addToRefs} onClick={() => clickedHandler(i)}>
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
