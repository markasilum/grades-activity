import React from 'react'
import { useState } from 'react';

const Form = (props) => {
  const [form, setForm] = useState({
    crsName: '',
    crsNum: '',
    units: 0,
    grade: '',
    numGrade: 0,
  })

  const handleForm = (e) => setForm({...form,[e.target.id]: e.target.value})

  const [radioGrade,setRadioGrade] = useState("")
  const onGradeChange =(e) =>{
    setRadioGrade(e.target.value)
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    let numGradeVal = 0
    //get numGrade based on letter grade before setting data
    {Object.keys(props.numbers).map(function(key){
      if(radioGrade == key){
        numGradeVal = props.numbers[key]
        console.log (numGradeVal)
      }

    })}
    props.onSubmit(form)
    props.set([...props.classList, {id:props.classList.length+1, crsName:form.crsName, crsNum:form.crsNum, units:form.units, grade:radioGrade, numGrade:numGradeVal}])
    console.log(props.classList)
  }

  return (
    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className='h-full px-3 py-6 overflow-y-auto bg-gray-50'>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
              <label htmlFor="crsNum" className="block mb-2 text-sm font-medium text-gray-900 ">Course Number</label>
              <input type="text" id="crsNum" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" value={form.crsNum} onChange={handleForm} ></input>
          </div>
          <div className="mb-4">
              <label htmlFor="crsName" className="block mb-2 text-sm font-medium text-gray-900 ">Course Name</label>
              <input type="text" id="crsName" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" value={form.crsName} onChange={handleForm}></input>
          </div>
          <div className="mb-4">
              <label htmlFor="units" className="block mb-2 text-sm font-medium text-gray-900 " >Units</label>
              <input type="number" id="units" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" value={form.units} onChange={handleForm}></input>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Grades</label>
          </div>

          <div className="flex items-center mb-4">
            <input id="A" type="radio" name="grades" value="A" className="w-4 h-4 border-gray-300" checked={radioGrade==="A"} onChange={onGradeChange}/>
            <label htmlFor="A" className="block ml-2 text-sm font-medium text-gray-900 ">A</label>
          </div>

          <div className="flex items-center mb-4">
            <input id="B+" type="radio" name="grades" value="B+" className="w-4 h-4 border-gray-300" checked={radioGrade==="B+"} onChange={onGradeChange}/>
            <label htmlFor="B+" className="block ml-2 text-sm font-medium text-gray-900 ">B+</label>
          </div>

          <div className="flex items-center mb-4">
            <input id="B" type="radio" name="grades" value="B" className="w-4 h-4 border-gray-300" checked={radioGrade==="B"} onChange={onGradeChange}/>
            <label htmlFor="B" className="block ml-2 text-sm font-medium text-gray-900 ">B</label>
          </div>

          <div className="flex items-center mb-4">
            <input id="C+" type="radio" name="grades" value="C+" className="w-4 h-4 border-gray-300" checked={radioGrade==="C+"} onChange={onGradeChange}/>
            <label htmlFor="C+" className="block ml-2 text-sm font-medium text-gray-900 ">C+</label>
          </div>

          <div className="flex items-center mb-4">
            <input id="C" type="radio" name="grades" value="C" className="w-4 h-4 border-gray-300" checked={radioGrade==="C"} onChange={onGradeChange}/>
            <label htmlFor="C" className="block ml-2 text-sm font-medium text-gray-900 ">C</label>
          </div>

          <div className="flex items-center mb-4">
            <input id="D" type="radio" name="grades" value="D" className="w-4 h-4 border-gray-300" checked={radioGrade==="D"} onChange={onGradeChange}/>
            <label htmlFor="D" className="block ml-2 text-sm font-medium text-gray-900 ">D</label>
          </div>

          <div className="flex items-center mb-4">
            <input id="F" type="radio" name="grades" value="F" className="w-4 h-4 border-gray-300" checked={radioGrade==="F"} onChange={onGradeChange}/>
            <label htmlFor="F" className="block ml-2 text-sm font-medium text-gray-900 ">F</label>
          </div>

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
      </form>
      </div>
      
    </aside>
    
  )
}

export default Form