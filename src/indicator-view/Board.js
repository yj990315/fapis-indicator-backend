import React, {useEffect, useState} from 'react'
import CustomInput from "./CustomInput";
import CustomOutput from "./CustomOutput";
import WeeklyInput from "./WeeklyInput";
import WeeklyOutput from "./WeeklyOutput"
import styled, { css } from "styled-components";
import {getIndicatorsStartToEndDate, getWeeklyIndicators} from "./utils";

function Board() {
  const [isWeekly, setIsWeekly] = useState(true)
  const [startingDate, setStartingDate] = useState(new Date())
  const [endingDate, setEndingDate] = useState()
  const [conversionInfo, setConversionInfo] = useState()
  const [year, setYear] = useState(new Date().getFullYear())
  const [month, setMonth] = useState(new Date().getMonth())
  const [weeklyConversionInfo, setWeeklyConversionInfo] = useState()

  const styledButton = styled.Button`
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid lightgray;
  `

  useEffect(() => {
    console.log(conversionInfo)
  }, [conversionInfo])

  useEffect(()=> {
    const getFromServer = async () => {
      const response = await getWeeklyIndicators(year, month)
      setWeeklyConversionInfo(response.data)
    }
    getFromServer()
  }, [])

  const handleWeeklyButton = () => {
    setIsWeekly(true);
  }
  const handleCustomButton = () => {
    setIsWeekly(false)
  }

  return (
    <>
      <div>
        <styledButton onClick={handleWeeklyButton}>
          주별로 보기
        </styledButton>
        <styledButton onClick={handleCustomButton}>
          특정 시간 검색하기
        </styledButton>
      </div>
      {
        isWeekly ?
          <>
            주별 보기
            <WeeklyInput
              year={year}
              setYear={setYear}
              month={month}
              setMonth={setMonth}
              setWeeklyConversionInfo={setWeeklyConversionInfo}
            />
            <WeeklyOutput
              weeklyConversionInfo={weeklyConversionInfo}
            />
          </>
          :
          <>
            특정 시간 검색
            <CustomInput
              startingDate={startingDate}
              setStartingDate={setStartingDate}
              endingDate={endingDate}
              setEndingDate={setEndingDate}
              setConversionInfo={setConversionInfo}
            />
            <CustomOutput
              startingDate={startingDate}
              endingDate={endingDate}
              conversionInfo={conversionInfo}
            />
          </>
      }
    </>
  )
}

export default Board;