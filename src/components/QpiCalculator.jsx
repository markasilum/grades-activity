import React from 'react'

const QpiCalculator = (props) => {
    let totalUnits=0
    let unitsTimesGrade = 0
    {props.items.map(item =>(
        unitsTimesGrade = unitsTimesGrade+ item.numGrade*item.units,
        totalUnits = totalUnits+item.units  
    ))}
  return (
    <>
       <td className='px-6 py-3'>{unitsTimesGrade/totalUnits}</td>
    </>
  )
}

export default QpiCalculator