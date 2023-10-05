import React from 'react'

const QpiCalculator = (props) => {
    let totalUnits=0
    let unitsTimesGrade = 0
    let qpi = 0
    {props.data.map(item =>(
        unitsTimesGrade = unitsTimesGrade + parseInt(item.numGrade)*parseInt(item.units),
        totalUnits = totalUnits+parseInt(item.units) 
    ))}
     qpi = unitsTimesGrade/totalUnits
  return (
    <>
       <td className='px-6 py-3'>{qpi.toFixed(2)}</td>
    </>
  )
}

export default QpiCalculator