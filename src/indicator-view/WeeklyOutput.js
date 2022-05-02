import React, {useEffect, useState} from 'react'

function WeeklyOutput(weeklyConversionInfo) {
  useEffect(() => {
    console.log(weeklyConversionInfo)
    // console.log(weeklyConversionInfo.weeklyConversionInfo)  // TODO : 왜 이렇게 되는지 궁금
  }, [weeklyConversionInfo])

  return (
    <>
      {
        !weeklyConversionInfo.weeklyConversionInfo?
        <>로딩중</>
        :
        <>
          {weeklyConversionInfo.weeklyConversionInfo.map(conversionInfoElement => (
              <div>
                기준시작일 : {conversionInfoElement.start_date}
                총 접수 : {conversionInfoElement.payed_number + conversionInfoElement.not_payed_number}
                결제 수 : {conversionInfoElement.payed_number}
                전환율 : {conversionInfoElement.conversion_rate}
              </div>
            )
          )}
        </>
      }
    </>
  )
}

export default WeeklyOutput;