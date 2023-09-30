import React from 'react'

function Items(props) {
  return (
    <>
        {props.items
        .filter(item=>item.crsNum.toLowerCase().includes(props.query.toLowerCase())||item.crsName.toLowerCase().includes(props.query.toLowerCase())).map(item =>(
            <tr key={item.id} className="bg-white">
                <td className="px-6 py-4 ">{item.crsNum}</td>
                <td className="px-6 py-4">{item.crsName}</td>
                <td className="px-6 py-4">{item.units}</td>
                <td className="px-6 py-4 content-center">{item.grade}</td>
            </tr>
        ))}
    </>
  )
}

export default Items