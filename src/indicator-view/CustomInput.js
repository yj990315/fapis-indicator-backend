import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import axios from "axios";
import {getIndicatorsStartToEndDate} from "./utils";

function CustomInput({startingDate, endingDate, setStartingDate, setEndingDate, setConversionInfo}) {


  return (
    <>
      <DatePicker selected={startingDate} onChange={(date) => setStartingDate(date)} />
      <DatePicker selected={endingDate} onChange={(date) => setEndingDate(date)} />
      <button onClick={ async () => {
        const response = await getIndicatorsStartToEndDate(startingDate, endingDate)
        setConversionInfo(response.data)
      }
      }>검색</button>
    </>
  );
}

export default CustomInput