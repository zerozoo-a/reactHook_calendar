import React from "react";
import Calendar from "./Calendar";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  list-style:none;

}
`;

const App = () => {
  return (
    <>
      <Calendar />
    </>
  );
};
export default App;
