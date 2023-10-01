import React from 'react'

const Form = (props) => {
  return (
    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className='h-full px-3 py-6 overflow-y-auto bg-gray-50'>
      <form>
        <div className="mb-4">
            <label for="courseNum" className="block mb-2 text-sm font-medium text-gray-900 ">Course Number</label>
            <input type="text" id="courseNum" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" ></input>
        </div>
        <div className="mb-4">
            <label for="courseName" className="block mb-2 text-sm font-medium text-gray-900 ">Course Name</label>
            <input type="text" id="courseName" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" ></input>
        </div>
        <div className="mb-4">
            <label for="units" className="block mb-2 text-sm font-medium text-gray-900 ">Units</label>
            <input type="number" id="units" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" ></input>
        </div>

        <div>
          <label for="units" className="block mb-2 text-sm font-medium text-gray-900 ">Grades</label>
        </div>

        <div className="flex items-center mb-4">
          <input id="A" type="radio" name="grades" value='4' className="w-4 h-4 border-gray-300" />
          <label for="A" className="block ml-2 text-sm font-medium text-gray-900 ">A</label>
        </div>

        <div className="flex items-center mb-4">
          <input id="B+" type="radio" name="grades" value="3.5" className="w-4 h-4 border-gray-300" />
          <label for="B+" className="block ml-2 text-sm font-medium text-gray-900 ">B+</label>
        </div>

        <div className="flex items-center mb-4">
          <input id="B" type="radio" name="grades" value="3" className="w-4 h-4 border-gray-300" />
          <label for="B" className="block ml-2 text-sm font-medium text-gray-900 ">B</label>
        </div>

        <div className="flex items-center mb-4">
          <input id="C+" type="radio" name="grades" value="2.5" className="w-4 h-4 border-gray-300" />
          <label for="C+" className="block ml-2 text-sm font-medium text-gray-900 ">C+</label>
        </div>

        <div className="flex items-center mb-4">
          <input id="C" type="radio" name="grades" value="2" className="w-4 h-4 border-gray-300" />
          <label for="C" className="block ml-2 text-sm font-medium text-gray-900 ">C</label>
        </div>

        <div className="flex items-center mb-4">
          <input id="D" type="radio" name="grades" value="1" className="w-4 h-4 border-gray-300" />
          <label for="D" className="block ml-2 text-sm font-medium text-gray-900 ">D</label>
        </div>

        <div className="flex items-center mb-4">
          <input id="F" type="radio" name="grades" value="0" className="w-4 h-4 border-gray-300" />
          <label for="F" className="block ml-2 text-sm font-medium text-gray-900 ">F</label>
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
    </form>
      </div>
    </aside>
    
  )
}

export default Form