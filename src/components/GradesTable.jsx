import React from 'react'
import Items from './Items'
import { useState } from 'react';
import SearchBar from './SearchBar';
import QpiCalculator from './QpiCalculator';

const classes = [
    {id:1, crsName: 'TECHNOPRENEURSHIP 1', crsNum: 'IS 3149', units: 5, grade:'A', numGrade:4},
    {id:2, crsName: 'NETWORKING  1', crsNum: 'IT 3147', units: 5, grade:'B',numGrade:3},
    {id:3, crsName: 'IT ELECTIVE 2', crsNum: 'IT 3148', units: 5, grade:'C',numGrade:2},
  ]

const GradesTable = () => {
const [data, setData] = useState(classes)
const [txtValue, setTextValue] = useState('')

  return (
    <div className="fixed w-11/12 ml-6 mt-4">
        <SearchBar value = {txtValue} onChange={(e)=>setTextValue(e.target.value)}/>
        
        <table className="w-11/12 text-sm text-left text-gray-500 mt-8 table-fixed ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Course Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Course Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Units
                </th>
                <th scope="col" className="px-6 py-3">
                    Grade
                </th>
            </tr>
        </thead>
        <tbody>
            <Items items={data} query={txtValue}/>
        </tbody>
        <tfoot className=''>
            <tr className="font-semibold text-gray-900">
                <td></td>
                <td></td>
                <th scope="row" className="px-6 py-3 text-base ">Total QPI</th>
                <QpiCalculator items={data}/>
            </tr>
        </tfoot>
        </table>
    </div>
  )
}

export default GradesTable