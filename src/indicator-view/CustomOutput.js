import React from "react";

function CustomOutput({startingDate, endingDate, conversionInfo}) {

  return (
    <>
      {
        !conversionInfo ?
          <div>로딩중</div>
          :
          <>
            <div>접수 수 : {conversionInfo.not_payed_number + conversionInfo.payed_number}</div>
            <div>결제 수 : {conversionInfo.payed_number} </div>
            <div>전환율 : {conversionInfo.conversion_rate} </div>
          </>
      }
    </>
  )
}

export default CustomOutput;