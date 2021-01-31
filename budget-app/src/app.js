import React from "react";
import Header from './components/Header';
import Balance from './components/Balance';
import Totals from './components/Totals';


const App = () => (
  <div class="container text-center ">
    <Header />
    <Balance />
    <Totals />
  </div >
);

export default App;