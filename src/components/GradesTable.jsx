import React from 'react'
import Items from './Items'
import { useState } from 'react';
import SearchBar from './SearchBar';
import QpiCalculator from './QpiCalculator';

const GradesTable = (props) => {
const [data, setData] = useState(props.items)
const [txtValue, setTextValue] = useState('')

  return (
    <aside id="mainpage" className="fixed top-0 left-1/4 z-45 w-4/5 h-screen transition-transform -translate-x-full sm:translate-x-0 mx-6 right-8" aria-label="mainpage">
      <div className='h-full px-6 py-6 overflow-y-auto bg-gray-50 '>
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
      </div>
    </aside>
    
  )
}

export default GradesTable