import React from 'react'
import { useState } from 'react';

const Form = (props) => {
  const [data, setData] = useState(props.classList)

  // const [form, setForm] = useState({
  //   crsName:"",
  //   crsNum:"",
  //   units:0,
  //   // grade:'',
  //   // numGrade:0
  // })

  // const handleForm = (e) => setForm({...form,[e.target.id]: e.target.value})

  const [crsNum, setCrsNum] = useState("")
  const handleNumChange = (e) => {setCrsNum(e.target.value)}

  const [crsName, setCrsName] = useState("")
  const handleNameChange = (e) => {setCrsName(e.target.value)}

  const [crsUnits, setCrsUnits] = useState(0)
  const handleUnitsChange = (e) => {setCrsUnits(e.target.value)}


  const [radioGrade,setRadioGrade] = useState("")
  const onGradeChange =(e) =>{
    setRadioGrade(e.target.value)
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    let numGradeVal = ''
    //get numGrade based on letter grade before setting data
    {Object.keys(props.numbers).map(function(key){
      if(radioGrade == key){
        console.log(props.numbers[key])
        numGradeVal = props.numbers[key]
      }

    })}


    setData([...data, {id:data.length+1, crsName:crsName, crsNum:crsNum, units:crsUnits, grade:radioGrade, numGrade:numGradeVal}])
    console.log(data)
  }

  return (
    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className='h-full px-3 py-6 overflow-y-auto bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label for="courseNum" className="block mb-2 text-sm font-medium text-gray-900 ">Course Number</label>
            <input type="text" id="courseNum" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" value={crsNum} onChange={handleNumChange}></input>
        </div>
        <div className="mb-4">
            <label for="courseName" className="block mb-2 text-sm font-medium text-gray-900 ">Course Name</label>
            <input type="text" id="courseName" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" value={crsName} onChange={handleNameChange}></input>
        </div>
        <div className="mb-4">
            <label for="units" className="block mb-2 text-sm font-medium text-gray-900 " >Units</label>
            <input type="number" id="units" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" value={crsUnits} onChange={handleUnitsChange}></input>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Grades</label>
        </div>

        <div className="flex items-center mb-4">
          <input id="A" type="radio" name="grades" value="A" className="w-4 h-4 border-gray-300" checked={radioGrade==="A"} onChange={onGradeChange}/>
          <label for="A" className="block ml-2 text-sm font-medium text-gray-900 ">A</label>
        </div>

        <div className="flex items-center mb-4">
          <input id="B+" type="radio" name="grades" value="B+" className="w-4 h-4 border-gray-300" checked={radioGrade==="B+"} onChange={onGradeChange}/>
          <label for="B+" className="block ml-2 text-sm font-medium text-gray-900 ">B+</label>
        </div>

        <div className="flex items-center mb-4">
          <input id="B" type="radio" name="grades" value="B" className="w-4 h-4 border-gray-300" checked={radioGrade==="B"} onChange={onGradeChange}/>
          <label for="B" className="block ml-2 text-sm font-medium text-gray-900 ">B</label>
        </div>

        <div className="flex items-center mb-4">
          <input id="C+" type="radio" name="grades" value="C+" className="w-4 h-4 border-gray-300" checked={radioGrade==="C+"} onChange={onGradeChange}/>
          <label for="C+" className="block ml-2 text-sm font-medium text-gray-900 ">C+</label>
        </div>

        <div className="flex items-center mb-4">
          <input id="C" type="radio" name="grades" value="C" className="w-4 h-4 border-gray-300" checked={radioGrade==="C"} onChange={onGradeChange}/>
          <label for="C" className="block ml-2 text-sm font-medium text-gray-900 ">C</label>
        </div>

        <div className="flex items-center mb-4">
          <input id="D" type="radio" name="grades" value="D" className="w-4 h-4 border-gray-300" checked={radioGrade==="D"} onChange={onGradeChange}/>
          <label for="D" className="block ml-2 text-sm font-medium text-gray-900 ">D</label>
        </div>

        <div className="flex items-center mb-4">
          <input id="F" type="radio" name="grades" value="F" className="w-4 h-4 border-gray-300" checked={radioGrade==="F"} onChange={onGradeChange}/>
          <label for="F" className="block ml-2 text-sm font-medium text-gray-900 ">F</label>
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
    </form>
      </div>
      
    </aside>
    
  )
}

export default Form